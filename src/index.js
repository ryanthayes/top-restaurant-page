import footer from "./footer";
import header from "./header";
import home from "./home";

function renderDOM() {
    const content = document.querySelector('#content');
    content.appendChild(header());
    content.appendChild(home());
    content.appendChild(footer());
};

renderDOM();
