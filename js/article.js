/**
 * Article page: read ?slug, render full post + related.
 */
(function () {
    const { renderHeader, renderFooter, renderArticleCard } = window.Components;
    const { escapeHtml, formatDate } = window.Utils;

    const root = document.getElementById('article-root');
    const relatedEl = document.getElementById('related-posts');

    async function init() {
        renderHeader();
        renderFooter();

        const slug = window.Utils.getQueryParam('slug');
        if (!slug) {
            renderNotFound();
            return;
        }

        try {
            const post = await window.CMS.getPostBySlug(slug);
            if (!post) {
                renderNotFound();
                return;
            }
            renderArticle(post);
            document.title = post.title + ' — LogiNews';
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute('content', post.excerpt);

            const related = window.CMS.getRelatedPosts(post, 3);
            relatedEl.innerHTML = related.length
                ? related.map(renderArticleCard).join('')
                : `<p class="text-ink-700 col-span-full">No related stories yet.</p>`;
        } catch (err) {
            window.Utils.showError(root, 'Could not load this article. Please try again later.');
            console.error(err);
        }
    }

    function renderArticle(post) {
        const cat = window.CMS.getCategoryName(post.category);
        const date = formatDate(post.date);

        const bcCat = document.getElementById('breadcrumb-category');
        if (bcCat) bcCat.innerHTML = `<a href="category.html?slug=${encodeURIComponent(post.category)}" class="hover:text-brand-600">${escapeHtml(cat)}</a>`;
        const bcTitle = document.getElementById('breadcrumb-title');
        if (bcTitle) bcTitle.textContent = post.title;

        root.innerHTML = `
      <header class="mb-8">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">${escapeHtml(cat)}</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">${escapeHtml(post.title)}</h1>
        <p class="text-lg text-ink-700 mb-4">${escapeHtml(post.excerpt)}</p>
        <div class="flex flex-wrap items-center gap-3 text-sm text-ink-700">
          <span class="font-medium text-ink-900">${escapeHtml(post.author)}</span>
          <span>·</span>
          <span>${escapeHtml(date)}</span>
          <span>·</span>
          <span>${post.readingTime} min read</span>
        </div>
      </header>
      <figure class="mb-8">
        <img src="${escapeHtml(post.image || 'assets/images/placeholder-16x9.jpg')}" alt="${escapeHtml(post.title)}" class="w-full rounded-2xl aspect-[16/9] object-cover" onerror="this.src='assets/images/placeholder-16x9.jpg'" />
      </figure>
      <div class="prose-custom max-w-none">${post.body}</div>
    `;
    }

    function renderNotFound() {
        root.innerHTML = `
      <div class="text-center py-16">
        <h1 class="text-2xl font-bold mb-2">Article not found</h1>
        <p class="text-ink-700 mb-6">We couldn't find the story you were looking for.</p>
        <a href="index.html" class="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition">Back to home</a>
      </div>`;
    }

    document.addEventListener('DOMContentLoaded', init);
})();