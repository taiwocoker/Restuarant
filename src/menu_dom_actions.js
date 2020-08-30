const menuPage = () => {
    const menuHeader = document.createElement('h2');
    menuHeader.innerText = 'OUR MENU';
    menuHeader.classList.add('menu-header');
    const menu = document.createElement('div');
    menu.classList.add('menu-container');
  
    // menu 1
    const menuOne = document.createElement('div');
    menuOne.classList.add('menu-card');
    const menuOneImg = document.createElement('div');
    menuOneImg.classList.add('menu-img-1');
    const menuOneName = document.createElement('div');
    menuOneName.classList.add('menu-name');
    const nameOne = document.createElement('h5');
    nameOne.innerText = 'Rice and Chicken';
    menuOneName.appendChild(nameOne);
  
    menuOne.appendChild(menuOneImg);
    menuOne.appendChild(menuOneName);
  
    // menu 2
    const menuTwo = document.createElement('div');
    menuTwo.classList.add('menu-card');
    const menuTwoImg = document.createElement('div');
    menuTwoImg.classList.add('menu-img-2');
    const menuTwoName = document.createElement('div');
    menuTwoName.classList.add('menu-name');
    const nameTwo = document.createElement('h5');
    nameTwo.innerText = 'Beans and Dodo';
    menuTwoName.appendChild(nameTwo);
  
    menuTwo.appendChild(menuTwoImg);
    menuTwo.appendChild(menuTwoName);
  
    // menu 3
    const menuThree = document.createElement('div');
    menuThree.classList.add('menu-card');
    const menuThreeImg = document.createElement('div');
    menuThreeImg.classList.add('menu-img-3');
    const menuThreeName = document.createElement('div');
    menuThreeName.classList.add('menu-name');
    const nameThree = document.createElement('h5');
    nameThree.innerText = 'Sphagetti Bolognaise';
    menuThreeName.appendChild(nameThree);
  
    menuThree.appendChild(menuThreeImg);
    menuThree.appendChild(menuThreeName);
  
    // menu 4
    const menuFour = document.createElement('div');
    menuFour.classList.add('menu-card');
    const menuFourImg = document.createElement('div');
    menuFourImg.classList.add('menu-img-4');
    const menuFourName = document.createElement('div');
    menuFourName.classList.add('menu-name');
    const nameFour = document.createElement('h5');
    nameFour.innerText = 'Yam Porridge';
    menuFourName.appendChild(nameFour);
  
    menuFour.appendChild(menuFourImg);
    menuFour.appendChild(menuFourName);
  
    // menu 5
    const menuFive = document.createElement('div');
    menuFive.classList.add('menu-card');
    const menuFiveImg = document.createElement('div');
    menuFiveImg.classList.add('menu-img-5');
    const menuFiveName = document.createElement('div');
    menuFiveName.classList.add('menu-name');
    const nameFive = document.createElement('h5');
    nameFive.innerText = 'Egusi Soup';
    menuFiveName.appendChild(nameFive);
  
    menuFive.appendChild(menuFiveImg);
    menuFive.appendChild(menuFiveName);
  
    // menu 6
    const menuSix = document.createElement('div');
    menuSix.classList.add('menu-card');
    const menuSixImg = document.createElement('div');
    menuSixImg.classList.add('menu-img-6');
    const menuSixName = document.createElement('div');
    menuSixName.classList.add('menu-name');
    const nameSix = document.createElement('h5');
    nameSix.innerText = 'Barbecued Fish';
    menuSixName.appendChild(nameSix);
  
    menuSix.appendChild(menuSixImg);
    menuSix.appendChild(menuSixName);
  
    menu.appendChild(menuOne);
    menu.appendChild(menuTwo);
    menu.appendChild(menuThree);
    menu.appendChild(menuFour);
    menu.appendChild(menuFive);
    menu.appendChild(menuSix);
    menuHeader.appendChild(menu);
  
    return menuHeader;
  };
  
  export default menuPage;