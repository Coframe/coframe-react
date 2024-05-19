module.exports = (id) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  ((c, o, f, r, a, m, e, s) => {
    c[f] =
      c[f] ||
      (() => {
        (c[f].q = c[f].q || []).push(arguments);
      });
    m = o.createElement(r);
    m.async = 1;
    m.src = 'https://cdn.jsdelivr.net/npm/coframe-ai/dist/cf.min.js';
    e = o.getElementsByTagName(r)[0];
    e.parentNode.insertBefore(m, e);
    s = o.createElement(r);
    s.innerHTML = `window.COFRAME_PAGE_ID = '${a}';`;
    e.parentNode.insertBefore(s, e);
  })(window, document, "coframe", "script", id);
};