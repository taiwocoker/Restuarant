import header from "./navbar_dom_actions";
import mainPage from "./home_dom_actions";

const navbar = header();

const homePage = mainPage();

const content = document.querySelector("#content");

const show = (section) => {
  content.innerHTML = "";
  content.appendChild(navbar);
  content.appendChild(section);
};

show(homePage);

