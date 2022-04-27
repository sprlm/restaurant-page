import createHeader from './header';
import displayMainPage from './mainPage';
import displayMenuPage from './menuPage';
import displayContactUsPage from './contactUsPage';
import './style.css';

const changeTab = (button) => {
  content.replaceChildren();

  homeBtn.classList.remove('selected');
  menuBtn.classList.remove('selected');
  contactUsBtn.classList.remove('selected');

  if (button.id === 'home-btn') {
    homeBtn.classList.add('selected');
    displayMainPage();
  } else if (button.id === 'menu-btn') {
    menuBtn.classList.add('selected');
    displayMenuPage();
  } else {
    contactUsBtn.classList.add('selected');
    displayContactUsPage();
  }
};

const content = document.createElement('div');
content.id = 'content';

createHeader();

const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', e => changeTab(e.target));

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', e => changeTab(e.target));

const contactUsBtn = document.querySelector('#contact-us-btn');
contactUsBtn.addEventListener('click', e => changeTab(e.target));

document.body.appendChild(content);

displayMainPage();
