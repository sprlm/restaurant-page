import Hamborger from './images/menu/hamborger.jpg';
import BreakfastBorger from './images/menu/breakfast-borger.jpg';
import BigBadBorger from './images/menu/big-bad-borger.jpg';
import './style.css';

const createMenuCard = (image, name, price, description) => {
  const menuImage = new Image();
  menuImage.src = image;
  menuImage.classList.add('menu-image');

  const menuName = document.createElement('h2');
  menuName.textContent = name;
  menuName.classList.add('body-header');

  const menuPrice = document.createElement('div');
  menuPrice.textContent = price;
  menuPrice.classList.add('body-text');

  const menuDescription = document.createElement('div');
  menuDescription.textContent = description;
  menuDescription.classList.add('body-text');

  const menuCard = document.createElement('div');
  menuCard.classList.add('menu-card');
  menuCard.append(menuImage, menuName, menuPrice, menuDescription);

  return menuCard;
};

const createBody = () => {
  const menuItem1 = createMenuCard(Hamborger, 'Hamborger', '$5.99', 
    'Our classic burger. Has everything you would ever want and more.');
  const menuItem2 = createMenuCard(BreakfastBorger, 'Breakfast Borger', '$6.99', 
    'Start your day the right way. With 800 calories of pure deliciousness.');
  const menuItem3 = createMenuCard(BigBadBorger, 'Big Bad Borger', '$10.99', 
    "It's big. It's bad (in a good way). It is Borger.");

  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');
  bodyContainer.append(menuItem1, menuItem2, menuItem3);
  
  return bodyContainer;
};

const displayMenuPage = () => {
  const content = document.querySelector('#content');

  const body = createBody();

  content.appendChild(body);
}

export default displayMenuPage;