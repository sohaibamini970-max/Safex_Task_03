/**
 * Category page: read ?slug, filter posts, paginate.
 */
(function () {
    const { renderHeader, renderFooter, renderArticleCard } = window.Components;
    const { escapeHtml } = window.Utils;

    const gridEl = document.getElementById('category-posts');
    const titleEl = document.getElementById('category-title');
    const descEl = document.getElementById('category-desc');
    const loadMoreBtn = document.getElementById('load-more');

    let filtered = [];
    let visibleCount = 0;

    async function init() {
        renderHeader();
        renderFooter();

        const slug = window.Utils.getQueryParam('slug') || 'all';

        try {
            const cats = await window.CMS.getCategories();
            const cat = cats.find((c) => c.slug === slug);
            if (cat) {
                titleEl.textContent = cat.name;
                descEl.textContent = cat.description || '';
                document.title = `${cat.name} — LogiNews`;
            } else {
                titleEl.textContent = 'All stories';
                descEl.textContent = 'Every story from across the National Logistics Company.';
            }

            filtered = window.CMS.getPostsByCategory(slug);
            visibleCount = Math.min(window.LOGINEWS_CONFIG.PAGE_SIZE, filtered.length);
            render();

            loadMoreBtn.addEventListener('click', () => {
                visibleCount += window.LOGINEWS_CONFIG.PAGE_SIZE;
                render();
            });
        } catch (err) {
            window.Utils.showError(gridEl, 'Could not load this category. Please try again later.');
            console.error(err);
        }
    }

    function render() {
        const slice = filtered.slice(0, visibleCount);
        gridEl.innerHTML = slice.length
            ? slice.map(renderArticleCard).join('')
            : `<div class="col-span-full text-center py-12 text-ink-700">No stories in this category yet.</div>`;

        loadMoreBtn.disabled = visibleCount >= filtered.length;
        loadMoreBtn.textContent = loadMoreBtn.disabled ? 'All stories loaded' : 'Load more';
    }

    document.addEventListener('DOMContentLoaded', init);
})();