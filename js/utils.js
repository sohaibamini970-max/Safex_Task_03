/**
 * Small helpers used across pages.
 */
window.Utils = (function () {
  function formatDate(iso) {
    try {
      const d = new Date(iso);
      if (isNaN(d)) return '';
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch { return ''; }
  }

  function slugify(str) {
    return String(str || '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function truncate(str, n = 140) {
    if (!str) return '';
    return str.length > n ? str.slice(0, n).trim() + '…' : str;
  }

  function showError(container, message) {
    if (!container) return;
    container.innerHTML = `
      <div class="col-span-full bg-red-50 border border-red-200 text-red-800 rounded-lg p-4" role="alert">
        <p class="font-semibold">Something went wrong</p>
        <p class="text-sm mt-1">${escapeHtml(message)}</p>
      </div>`;
  }

  return { formatDate, slugify, escapeHtml, getQueryParam, truncate, showError };
})();