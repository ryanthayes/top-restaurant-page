import { createHtmlElement, createImg } from "./dom-elements"

export default function header() {

    const header = createHtmlElement('header', 'header', null, null, null);
    const nav = createHtmlElement('nav', 'nav-bar', ['nav-bar'], null, header);
    const container = createHtmlElement('div', null, ['container', '|', 'flex', 'justify-content-between'], null, nav);
    
    // const logo = createImg('site-logo', Logo, container);

    const primaryNav = createHtmlElement('ul', null, ['primary-nav', '|', 'flex', 'gap-md', 'align-items-center'], null, container);
    const home = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#');
    homeLink.innerText = 'Home';
    home.appendChild(homeLink);
    const menu = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    const menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#');
    menuLink.innerText = 'Menu';
    menu.appendChild(menuLink);
    const about = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    const aboutLink = document.createElement('a');
    aboutLink.setAttribute('href', '#');
    aboutLink.innerText = 'About';
    about.appendChild(aboutLink);
    const contact = createHtmlElement('li', null, ['primary-nav__items'], null, primaryNav);
    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', '#');
    contactLink.innerText = 'Contact Us';
    contact.appendChild(contactLink);

    const button = createHtmlElement('button', null, ['btn'], 'Book A Table', container);

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