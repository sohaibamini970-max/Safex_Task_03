/**
 * Reusable UI components: header, footer, article card, category filter.
 */
window.Components = (function () {
    const { escapeHtml, formatDate } = window.Utils;
    const cfg = window.LOGINEWS_CONFIG;

    function renderHeader() {
        const el = document.getElementById('site-header');
        if (!el) return;
        el.innerHTML = `
      <header class="bg-white/95 backdrop-blur border-b border-ink-100 sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <a href="index.html" class="flex items-center gap-2 font-bold text-lg text-ink-900">
              <span class="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-brand-600 text-white">L</span>
              <span>${escapeHtml(cfg.SITE.name)}</span>
            </a>
            <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-ink-700">
              <a href="index.html" class="hover:text-brand-600">Home</a>
              <a href="category.html?slug=all" class="hover:text-brand-600">All stories</a>
              <a href="about.html" class="hover:text-brand-600">About</a>
              <a href="contact.html" class="hover:text-brand-600">Contact</a>
            </nav>
            <div class="flex items-center gap-3">
              <a href="contact.html" class="hidden sm:inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">Subscribe</a>
              <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-lg hover:bg-ink-100" aria-label="Open menu" aria-expanded="false">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>
                </svg>
              </button>
            </div>
          </div>
          <div id="mobile-menu" class="hidden md:hidden border-t border-ink-100 py-3">
            <nav class="flex flex-col gap-2 text-sm font-medium text-ink-700">
              <a href="index.html" class="px-2 py-2 rounded hover:bg-ink-100">Home</a>
              <a href="category.html?slug=all" class="px-2 py-2 rounded hover:bg-ink-100">All stories</a>
              <a href="about.html" class="px-2 py-2 rounded hover:bg-ink-100">About</a>
              <a href="contact.html" class="px-2 py-2 rounded hover:bg-ink-100">Contact</a>
            </nav>
          </div>
        </div>
      </header>`;

        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                const isOpen = !menu.classList.contains('hidden');
                menu.classList.toggle('hidden');
                toggle.setAttribute('aria-expanded', String(!isOpen));
            });
        }
    }

    function renderFooter() {
        const el = document.getElementById('site-footer');
        if (!el) return;
        const year = new Date().getFullYear();
        el.innerHTML = `
      <footer class="bg-ink-900 text-white/80 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p class="text-white font-bold text-lg mb-3">${escapeHtml(cfg.SITE.name)}</p>
            <p class="text-sm">${escapeHtml(cfg.SITE.tagline)}</p>
          </div>
          <div>
            <p class="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Sections</p>
            <ul class="space-y-2 text-sm">
              <li><a href="category.html?slug=freight" class="hover:text-white">Freight</a></li>
              <li><a href="category.html?slug=warehousing" class="hover:text-white">Warehousing</a></li>
              <li><a href="category.html?slug=last-mile" class="hover:text-white">Last mile</a></li>
              <li><a href="category.html?slug=technology" class="hover:text-white">Technology</a></li>
            </ul>
          </div>
          <div>
            <p class="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company</p>
            <ul class="space-y-2 text-sm">
              <li><a href="about.html" class="hover:text-white">About</a></li>
              <li><a href="contact.html" class="hover:text-white">Contact</a></li>
              <li><a href="contact.html" class="hover:text-white">Press enquiries</a></li>
            </ul>
          </div>
          <div>
            <p class="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Contact</p>
            <ul class="space-y-2 text-sm">
              <li>${escapeHtml(cfg.SITE.email)}</li>
              <li>${escapeHtml(cfg.SITE.phone)}</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© ${year} ${escapeHtml(cfg.SITE.company)}. All rights reserved.</p>
            <p>Built with HTML, Tailwind CSS & vanilla JavaScript.</p>
          </div>
        </div>
      </footer>`;
    }

    function renderArticleCard(post) {
        if (!post) return '';
        const date = formatDate(post.date);
        const cat = window.CMS.getCategoryName(post.category);
        return `
      <a href="article.html?slug=${encodeURIComponent(post.slug)}" class="block bg-white rounded-xl overflow-hidden shadow-sm card-lift group">
        <div class="aspect-[16/9] bg-ink-100 overflow-hidden">
          <img src="${escapeHtml(post.image || 'assets/images/placeholder-16x9.jpg')}" alt="${escapeHtml(post.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.src='assets/images/placeholder-16x9.jpg'" />
        </div>
        <div class="p-5">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-semibold uppercase tracking-wide text-brand-600">${escapeHtml(cat)}</span>
            <span class="text-xs text-ink-700">· ${escapeHtml(date)}</span>
          </div>
          <h3 class="font-bold text-lg leading-snug mb-2 line-clamp-2 group-hover:text-brand-600 transition">${escapeHtml(post.title)}</h3>
          <p class="text-sm text-ink-700 line-clamp-3">${escapeHtml(post.excerpt)}</p>
        </div>
      </a>`;
    }

    function renderFeaturedCard(post) {
        if (!post) return '';
        const date = formatDate(post.date);
        const cat = window.CMS.getCategoryName(post.category);
        return `
      <a href="article.html?slug=${encodeURIComponent(post.slug)}" class="block bg-white rounded-xl overflow-hidden shadow-sm card-lift group">
        <div class="aspect-[16/9] bg-ink-100 overflow-hidden">
          <img src="${escapeHtml(post.image || 'assets/images/placeholder-16x9.jpg')}" alt="${escapeHtml(post.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.src='assets/images/placeholder-16x9.jpg'" />
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-semibold uppercase tracking-wide text-brand-600">${escapeHtml(cat)}</span>
            <span class="text-xs text-ink-700">· ${escapeHtml(date)}</span>
            <span class="text-xs text-ink-700">· ${post.readingTime} min read</span>
          </div>
          <h3 class="font-bold text-2xl leading-snug mb-3 group-hover:text-brand-600 transition">${escapeHtml(post.title)}</h3>
          <p class="text-ink-700">${escapeHtml(post.excerpt)}</p>
        </div>
      </a>`;
    }

    async function renderCategoryFilter(activeSlug, onClick) {
        const el = document.getElementById('category-filter');
        if (!el) return;
        const cats = await window.CMS.getCategories();
        const all = [{ slug: 'all', name: 'All' }, ...cats];
        el.innerHTML = all.map((c) => {
            const active = (activeSlug || 'all') === c.slug;
            const cls = active
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white text-ink-700 border-ink-100 hover:border-brand-500 hover:text-brand-600';
            return `<button data-slug="${escapeHtml(c.slug)}" class="text-sm font-medium px-4 py-1.5 rounded-full border ${cls} transition">${escapeHtml(c.name)}</button>`;
        }).join('');

        el.querySelectorAll('button').forEach((btn) => {
            btn.addEventListener('click', () => {
                el.querySelectorAll('button').forEach((b) => {
                    b.classList.remove('bg-brand-600', 'text-white', 'border-brand-600');
                    b.classList.add('bg-white', 'text-ink-700', 'border-ink-100');
                });
                btn.classList.add('bg-brand-600', 'text-white', 'border-brand-600');
                btn.classList.remove('bg-white', 'text-ink-700', 'border-ink-100');
                if (typeof onClick === 'function') onClick(btn.getAttribute('data-slug'));
            });
        });
    }

    return { renderHeader, renderFooter, renderArticleCard, renderFeaturedCard, renderCategoryFilter };
})();