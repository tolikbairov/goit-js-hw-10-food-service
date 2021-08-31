import menuCardsTmpl from '../templates/menu-item.hbs';
import menuItems from './menu.json';
const menuList = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(menuItems);
console.log(menuList);
menuList.insertAdjacentHTML('beforeend', cardsMarkup);
function createMenuCardsMarkup(items) {
  return menuCardsTmpl(items);
}
