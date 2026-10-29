(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const storageKey = 'theme';

  function applyTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.textContent = dark ? 'Light mode' : 'Dark mode';
    toggle.setAttribute('aria-pressed', String(dark));
  }

  let saved;
  try { saved = localStorage.getItem(storageKey); } catch {}
  applyTheme(saved === 'dark' ? 'dark' : 'light');
  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem(storageKey, theme); } catch {}
  });

  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.site-header nav a')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }, {rootMargin:'-15% 0px -65% 0px',threshold:0});
    for (const id of ['projects','background','contact']) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
  }
})();
