export function initializeTheme() {
  const updateTheme = () => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDark) {
      document.documentElement.classList.add('wa-dark');
      document.body.classList.add('wa-dark');
      document.body.classList.remove('wa-light');
    } else {
      document.documentElement.classList.remove('wa-dark');
      document.body.classList.add('wa-light');
      document.body.classList.remove('wa-dark');
    }
  };

  updateTheme();
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', updateTheme);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}
