import Logo from './images/logo-footer.png';

import { createHtmlElement, createImg } from "./dom-elements";

export default function footer() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    
    const container = createHtmlElement('div', null, ['container', 'three-col', 'justify-content-between'], null, footer);

    const logo = createImg('footer-logo', Logo, '150px', null, container);

    const location = createHtmlElement('div', null, null, null, container);
    const locationTitle = createHtmlElement('h3', null, ['title--sm', '|', 'mb-sm'], 'Location', location);
    const locationP1 = createHtmlElement('p', null, null, '123 Elm Street', location)
    const locationP2 = createHtmlElement('p', null, null, 'Hollywood, CA', location)

    const hours = createHtmlElement('div', null, null, null, container);
    const hoursTitle = createHtmlElement('h3', null, ['title--sm', '|', 'mb-sm'], 'Hours', hours);
    const hoursP1 = createHtmlElement('p', null, null, 'Mon - Fri: 11am - 8pm', hours)
    const hoursP2 = createHtmlElement('p', null, null, 'Sat & Sun: 9am - 10pm', hours)

    return footer;
};

