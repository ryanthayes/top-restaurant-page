import footer from "./footer";
import header from "./header";
import home from "./home";
import menu from "./menu";
import './style.css';

function renderDOM() {
    const content = document.querySelector('#content');
    content.appendChild(header());
    content.appendChild(home());
    content.appendChild(menu());
    content.appendChild(footer());
};

renderDOM();
