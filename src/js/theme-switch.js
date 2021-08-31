const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkboxSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
setDefaultTheme = () => {
  const theme = localStorage.getItem('theme');

  if (theme === Theme.DARK) {
    checkboxSwitch.checked = true;
    body.classList.add(Theme.DARK);
    return;
  }
  body.classList.add(Theme.LIGHT);
};
setDefaultTheme();
checkboxSwitch.addEventListener('change', onChange);

function onChange(e) {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  let newTheme = e.currentTarget.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem('theme', newTheme);
}
