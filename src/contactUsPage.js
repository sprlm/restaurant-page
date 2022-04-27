import './style.css';

const createContactCard = (name, number) => {
  const header = document.createElement('h2');
  header.textContent = name;
  header.classList.add('body-header');

  const content = document.createElement('div');
  content.textContent = number;
  content.classList.add('body-text');

  const contactCard = document.createElement('div');
  contactCard.classList.add('body-card');
  contactCard.append(header, content);

  return contactCard;
};

const createBody = () => {
  const contactCard1 = createContactCard('Bobert Burgsman', 
    'Owner\r\n123-456-7890\r\nbburg@email.com');
  const contactCard2 = createContactCard('Pickled Richard', 
    'Chef\r\n098-765-4321\r\npickrick@email.com');
  const contactCard3 = createContactCard('Bee Eltee', 
    'Burger Therapist\r\n555-555-5555\r\nblt@email.com');
  const contactCard4 = createContactCard('Billiam Bunsworth', 
    'Assistant Burger Therapist\r\n777-777-7777\r\nbbun@email.com');

  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');
  bodyContainer.append(contactCard1, contactCard2, contactCard3, contactCard4);
  
  return bodyContainer;
};

const displayContactUsPage = () => {
  const content = document.querySelector('#content');

  const body = createBody();

  content.appendChild(body);
}

export default displayContactUsPage;