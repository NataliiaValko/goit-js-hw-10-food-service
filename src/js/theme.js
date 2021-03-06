import refs from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const classReplace = (themeOld, themeNew) => {
  refs.bodyRef.classList.replace(themeOld, themeNew);
}

localStorage.getItem('THEME') === Theme.DARK
  ? (refs.bodyRef.classList.add(Theme.DARK),
    refs.checkBoxRef.checked = true)
  : (refs.bodyRef.classList.add(Theme.LIGHT));

const onDarkTheme = () => {
  classReplace(Theme.LIGHT, Theme.DARK);
  localStorage.setItem('THEME', Theme.DARK);
 }

const onLightTheme = () => {
  classReplace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('THEME', Theme.LIGHT);
}

const onInputChange = () => {
  refs.checkBoxRef.checked
    ? onDarkTheme()
    : onLightTheme()
}

refs.checkBoxRef.addEventListener('change', onInputChange)