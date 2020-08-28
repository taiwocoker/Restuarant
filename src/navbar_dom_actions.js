const navbarDom = () => {
  const nav = document.createElement("nav");
  // logo
  const navLogo = document.createElement("div");
  navLogo.classList.add("nav-logo");
  const navHeader = document.createElement("h1");
  navHeader.innerText = "CREAMY DELIGHT";

  navLogo.appendChild(navHeader);

  // navigation bar
  const container = document.createElement("ul");
  container.classList.add("nav-list");

  const navHome = document.createElement("li");
  const home = document.createElement("a");
  home.innerText = "HOME";
  navHome.classList.add("nav-items");
  home.id = "home";
  navHome.appendChild(home);

  const navMenu = document.createElement("li");
  const menu = document.createElement("a");
  menu.innerText = "MENU";
  navMenu.classList.add("nav-items");
  menu.id = "menu";
  navMenu.appendChild(menu);

  const navContact = document.createElement("li");
  const contact = document.createElement("a");
  contact.innerText = "CONTACT";
  navContact.classList.add("nav-items");
  contact.id = "contact";
  navContact.appendChild(contact);

  container.appendChild(navHome);
  container.appendChild(navMenu);
  container.appendChild(navContact);

  nav.appendChild(navLogo);
  nav.appendChild(container);

  return nav;
};

export default navbarDom;
