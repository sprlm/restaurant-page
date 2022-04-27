import Background from './images/hero-img.jpg';
import './style.css';

const createHeroBanner = () => {
  const heroImg = new Image();
  heroImg.src = Background;
  heroImg.classList.add('hero-img');

  const heroHeader = document.createElement('div');
  heroHeader.textContent = 'BORGER.';
  heroHeader.classList.add('hero-header');

  const heroSubheader = document.createElement('div');
  heroSubheader.textContent = 'Bigger. Badder. Borger.';
  heroSubheader.classList.add('hero-subheader');

  const heroTextContainer = document.createElement('div');
  heroTextContainer.classList.add('hero-text-container');
  heroTextContainer.append(heroHeader, heroSubheader);

  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-container');
  heroContainer.append(heroImg, heroTextContainer);

  return heroContainer;
};

const createQuoteCard = () => {
  const quoteText = document.createElement('div');
  quoteText.textContent = 'Eating at Borger literally changed my life. Their '
    + 'burgers rival those of legends: Hestia, Auguste Gusteau, and Ronald '
    + 'McDonald to name a few. I give this restaurant my wholehearted recommendation.'
  quoteText.classList.add('body-text', 'quote');

  const quoteAuthor = document.createElement('h2');
  quoteAuthor.textContent = '- G***** Ramsey';
  quoteAuthor.classList.add('body-header', 'quote-author');

  const quoteCard = document.createElement('div');
  quoteCard.classList.add('body-card');
  quoteCard.append(quoteText, quoteAuthor);

  return quoteCard;
};

const createHoursCard = () => {
  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'Hours';
  hoursHeader.classList.add('body-header');

  const hoursText = document.createElement('div');
  hoursText.textContent = '8:00AM - 8:00PM, Monday to Friday\r\n'
    + '8:00AM - 10:00PM, Saturday and Sunday';
  hoursText.classList.add('body-text');

  const hoursCard = document.createElement('div');
  hoursCard.classList.add('body-card');
  hoursCard.append(hoursHeader, hoursText);

  return hoursCard;
};

const createLocationCard = () => {
  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'Location';
  locationHeader.classList.add('body-header');

  const locationText = document.createElement('div');
  locationText.textContent = '123 Burger Street, Bun Lane, Flavortown USA';
  locationText.classList.add('body-text');

  const locationCard = document.createElement('div');
  locationCard.classList.add('body-card');
  locationCard.append(locationHeader, locationText);

  return locationCard;
};

const createBody = () => {
  const quoteCard = createQuoteCard();
  const hoursCard = createHoursCard();  
  const locationCard = createLocationCard();

  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');
  bodyContainer.append(quoteCard, hoursCard, locationCard);
  
  return bodyContainer;
};

const displayMainPage = () => {
  const content = document.querySelector('#content');

  const heroBanner = createHeroBanner();
  const body = createBody();

  content.append(heroBanner, body);
};

export default displayMainPage;