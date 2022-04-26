import './style.css';

const createHeader = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const homeBtn = document.createElement('div');
  homeBtn.textContent = 'Home';
  homeBtn.id = 'home-btn';
  homeBtn.classList.add('selected');
  header.appendChild(homeBtn);

  const menuBtn = document.createElement('div');
  menuBtn.textContent = 'Menu';
  menuBtn.id = 'menu-btn';
  header.appendChild(menuBtn);

  const contactUsBtn = document.createElement('div');
  contactUsBtn.textContent = 'Contact Us';
  contactUsBtn.id = 'contact-us-btn';
  header.appendChild(contactUsBtn);

  document.body.appendChild(header);
}

export default createHeader;