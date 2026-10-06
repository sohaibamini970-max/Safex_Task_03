/**
 * Home page logic: load posts, render featured + grid, category filter, load more.
 */
(function () {
    const { renderHeader, renderFooter, renderArticleCard, renderFeaturedCard, renderCategoryFilter } = window.Components;

    let allPosts = [];
    let visibleCount = 0;
    let activeCategory = 'all';

    const featuredEl = document.getElementById('featured-posts');
    const gridEl = document.getElementById('posts-grid');
    const loadMoreBtn = document.getElementById('load-more');

    async function init() {
        renderHeader();
        renderFooter();

        try {
            allPosts = await window.CMS.getPosts();
        } catch (err) {
            window.Utils.showError(gridEl, 'Could not load posts. Please try again later.');
            console.error(err);
            return;
        }

        const featured = allPosts.filter((p) => p.featured).slice(0, 2);
        featuredEl.innerHTML = featured.map(renderFeaturedCard).join('');

        await renderCategoryFilter('all', (slug) => {
            activeCategory = slug;
            renderGrid();
        });

        renderGrid();
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += window.LOGINEWS_CONFIG.PAGE_SIZE;
            renderGrid();
        });
    }

    function renderGrid() {
        const filtered = activeCategory === 'all'
            ? allPosts
            : allPosts.filter((p) => p.category === activeCategory);

        if (visibleCount === 0 || visibleCount > filtered.length) {
            visibleCount = Math.min(window.LOGINEWS_CONFIG.PAGE_SIZE, filtered.length);
        }

        const slice = filtered.slice(0, visibleCount);
        gridEl.innerHTML = slice.length
            ? slice.map(renderArticleCard).join('')
            : `<div class="col-span-full text-center py-12 text-ink-700">No stories in this category yet.</div>`;

        loadMoreBtn.disabled = visibleCount >= filtered.length;
        loadMoreBtn.textContent = loadMoreBtn.disabled ? 'All stories loaded' : 'Load more stories';
    }

    document.addEventListener('DOMContentLoaded', init);
})();