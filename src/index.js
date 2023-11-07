import footer from "./footer";
import header from "./header";
import home from "./home";
import about from "./about";
import menu from "./menu";
import contact from "./contact";
import reservations from "./reservations";
import './style.css';

const contentWrapper = document.querySelector('#content');
const content = document.createElement('div');
contentWrapper.append(header(), content, footer());
content.append(home());

const siteLogo = document.querySelector('#home');
const aboutPage = document.querySelector('#about');
const menuPage = document.querySelector('#menu');
const contactPage = document.querySelector('#contact');
const reservationsNavBtn = document.querySelector('#reservationsNavBtn');
const reservationsHeroBtn = document.querySelector('#reservationsHeroBtn');
const menuBtn = document.querySelector('#menuBtn');


// const removeActive = () => {
//     navItems.forEach((item) => {
//         item.classList.remove('active');
//     });
// };

const renderHome = () => {
    // removeActive();
    content.replaceChildren(home());
};
const renderAbout = () => {
    // removeActive();
    content.replaceChildren(about());
    // aboutPage.classList.add('active');
};
const renderMenu = () => {
    // removeActive();
    content.replaceChildren(menu());
    // menuPage.classList.add('active');
};
const renderContact = () => {
    // removeActive();
    content.replaceChildren(contact());
    // contactPage.classList.add('active');
};
const renderReservations = () => {
    // removeActive();
    content.replaceChildren(reservations());
};

siteLogo.addEventListener('click', renderHome);
aboutPage.addEventListener('click', renderAbout);
menuPage.addEventListener('click', renderMenu);
contactPage.addEventListener('click', renderContact);
reservationsNavBtn.addEventListener('click', renderReservations);
reservationsHeroBtn.addEventListener('click', renderReservations);
menuBtn.addEventListener('click', renderMenu);