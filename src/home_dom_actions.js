const mainPage = () => {
    const main = document.createElement('div');
    main.classList.add('bg-image');
  
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'We provide excellent customer service and quality meals';
    const button = document.createElement('button');
    const buttonText = document.createElement('a');
    buttonText.classList.add('btn-menu');
    buttonText.innerText = 'VIEW DELICACIES';
    button.appendChild(buttonText);
  
    main.appendChild(headerTitle);
    main.appendChild(button);
  
    return main;
  };
  
  export default mainPage;