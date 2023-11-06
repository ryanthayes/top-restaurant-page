import footer from "./footer";
import header from "./header";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import './style.css';

// const removeActive = () => {
//     navItems.forEach((item) => {
//         item.classList.remove('active');
//     });
// };

const renderHome = () => {
    const content = document.querySelector('#content');
    // removeActive();
    content.appendChild(header());
    content.appendChild(home());
    content.appendChild(footer());
};

const renderMenu = () => {
    const content = document.querySelector('#content');
    // removeActive();
    content.appendChild(header());
    content.appendChild(menu());
    content.appendChild(footer());
};

const renderContact = () => {
    const content = document.querySelector('#content');
    // removeActive();
    content.appendChild(header());
    content.appendChild(contact());
    content.appendChild(footer());
};

renderContact();