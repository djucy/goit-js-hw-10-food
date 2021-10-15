import './styles.css';
import createMenu from './templates/menu.hbs';
import menu from './menu.json';

const refs = {
    inputBtnToggle: document.querySelector('.theme-switch__toggle'),
    listMenu: document.querySelector('.js-menu'),
    body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.listMenu.insertAdjacentHTML('beforeend', createMenu(menu));
refs.body.classList.add(localStorage.getItem('Theme')?localStorage.getItem('Theme'):Theme.LIGHT)
refs.inputBtnToggle.checked = localStorage.getItem('Theme') === Theme.DARK;

refs.inputBtnToggle.addEventListener('click', onChangeTheme);
function onChangeTheme(event) {
    if (event.target.checked) {
    toggleTheme(Theme.DARK, Theme.LIGHT);
    }
    else {
    toggleTheme(Theme.LIGHT,Theme.DARK);
    }
}
 
function toggleTheme(add, remove) {
    refs.body.classList.add(add);
    refs.body.classList.remove(remove);
    localStorage.setItem('Theme', add)
}