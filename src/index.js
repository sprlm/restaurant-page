import createHeader from './header';
import createMainPage from './main-page';
import './style.css';

createHeader();

const content = document.createElement('div');
content.id = 'content';

document.body.appendChild(content);

createMainPage();
