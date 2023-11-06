import Logo from './images/logo.png';

import { createHtmlElement, createImg } from "./dom-elements"

export default function header() {

    const header = createHtmlElement('header', 'header', null, null, null);
    const nav = createHtmlElement('nav', 'nav-bar', ['nav-bar'], null, header);
    const container = createHtmlElement('div', null, ['container', '|', 'flex', 'justify-content-between'], null, nav);
    
    const logo = createImg('site-logo', Logo, '150px', null, container);
    logo.setAttribute('href', '#');
    logo.id = 'home';

    const primaryNav = createHtmlElement('ul', null, ['primary-nav', '|', 'flex', 'gap-md', 'align-items-center'], null, container);
    const home = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    
    // const homeLink = document.createElement('a');
    // homeLink.setAttribute('href', '#');
    // homeLink.id = 'home'
    // homeLink.innerText = 'Home';
    // home.appendChild(homeLink);
    
    const about = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    const aboutLink = document.createElement('a');
    aboutLink.setAttribute('href', '#');
    aboutLink.id = 'about'
    aboutLink.innerText = 'About';
    about.appendChild(aboutLink);
    
    const menu = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    const menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#');
    menuLink.id = 'menu'
    menuLink.innerText = 'Menu';
    menu.appendChild(menuLink);
   
    const contact = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', '#');
    contactLink.id = 'contact'
    contactLink.innerText = 'Contact';
    contact.appendChild(contactLink);

    const button = createHtmlElement('button', 'reservationsNavBtn', ['btn'], 'Book A Table', container);

    return header;
}


{/* <header id="header" class="">
            <nav id="nav-bar" class="nav-bar ">
                <div class="container | flex justify-content-between ">
                    <img src="/src/images/logo.png" alt="" class="site-logo">
                    <ul class="primary-nav | flex gap-md align-items-center">
                        <li class="primary-nav__items"><a href="#">Home</a></li>
                        <li class="primary-nav__items"><a href="#">Menu</a></li>
                        <li class="primary-nav__items"><a href="#">About</a></li>
                        <li class="primary-nav__items"><a href="#">Contact</a></li>
                    </ul>
                    <button class="btn |">Book A Table</button>
                        
                </div>
                
            </nav>
        </header> */}