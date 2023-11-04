import { createHtmlElement } from "./dom-elements"

export default function home() {
    
    const main = createHtmlElement('main', 'main', ['main'], null, null);
    const hero = createHtmlElement('section', null, ['hero', '|', 'flex', 'align-items-center'], null, main);
    const heroContainer = createHtmlElement('div', null, ['container--hero'], null, hero);
    const heroTitle = createHtmlElement('h1', null, ['title'], 'Treat Your Taste Buds to a Blissful Experience', heroContainer);
    const heroBlurb = createHtmlElement('p', null, ['hero-blurb'], 'Discover delectable cuisine and experience unforgettable moments with friends, family, and loved ones.', heroContainer);
    const btnContainer = createHtmlElement('div', null, ['hero-btn__container'], null, heroContainer);
    const primaryBtn = createHtmlElement('button', null, ['btn'], 'Book a Table', btnContainer);
    const secondaryBtn = createHtmlElement('button', null, ['btn', 'btn--secondary'], 'Explore Our Menu', btnContainer);

    return main;
};