import createHeader from './header';
import displayMainPage from './mainPage';
import displayContactUsPage from './contactUsPage';
import './style.css';

const content = document.createElement('div');
content.id = 'content';

const changeTab = (button) => {
  content.replaceChildren();

  if (button.id === 'home-btn') {
    homeBtn.classList.add('selected');
    menuBtn.classList.remove('selected');
    contactUsBtn.classList.remove('selected');
    displayMainPage();
  } else if (button.id === 'menu-btn') {

  } else {
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
    contactUsBtn.classList.add('selected');
    displayContactUsPage();
  }
};

createHeader();

const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', e => changeTab(e.target));

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', e => changeTab(e.target));

const contactUsBtn = document.querySelector('#contact-us-btn');
contactUsBtn.addEventListener('click', e => changeTab(e.target));

document.body.appendChild(content);

displayMainPage();
