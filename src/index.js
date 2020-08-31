import header from './navbar';
import mainPage from './homePage';
import menuItem from './menu';
import contactUs from './contact';

const navbar = header();
const homePage = mainPage();
const menuPage = menuItem();
const contactPage = contactUs();

const content = document.querySelector('#content');

const show = (section) => {
  content.innerHTML = null;
  content.appendChild(navbar);
  content.appendChild(section);
};

show(homePage);

const homeMenu = document.querySelector('.btn-menu');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

const displaySection = (e) => {
  if (e.target === homeBtn) {
    show(homePage);
  } else if (e.target === menuBtn || e.target === homeMenu) {
    show(menuPage);
  } else {
    show(contactPage);
  }
};

homeBtn.addEventListener('click', displaySection);
menuBtn.addEventListener('click', displaySection);
contactBtn.addEventListener('click', displaySection);
homeMenu.addEventListener('click', displaySection);
