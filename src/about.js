import heroImg from './images/chris-liverani-oCsaxvGCehM-unsplash.jpg';

import { createHtmlElement, createImg } from "./dom-elements"

export default function about() {
    
    const main = createHtmlElement('main', 'main', ['main'], null, null);
    const hero = createHtmlElement('section', null, ['about-hero'], null, main);
    const heroContainer = createHtmlElement('div', null, ['container', '|', 'two-col'], null, hero);
    const heroImage = createImg(['about-hero__image'], heroImg, null, null, heroContainer);
    const heroContent = createHtmlElement('div', null, ['hero-content'], null, heroContainer);
    const heroTitle = createHtmlElement('h1', null, ['title'], 'From our family to yours.', heroContent);
    const heroBlurb = createHtmlElement('p', null, ['hero-blurb'], 'Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city\'s rich culinary culture, we aim to honor our local roots while infusing a global palate.', heroContent);

    return main;
};