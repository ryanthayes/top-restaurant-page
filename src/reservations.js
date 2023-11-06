import { createFormInput, createFormLabel, createHtmlElement } from "./dom-elements";

export default function reservations() {
    const main = createHtmlElement('main', 'main', null, null, null);
    const section = createHtmlElement('section', null, ['container', 'container--small'], null, main);

    const header = createHtmlElement('header', null, ['reservations-header'], null, section);
    const headerContainer = createHtmlElement('div', null, ['container'], null, header)
    const title = createHtmlElement('h1', null, ['title'], 'Book a Table', headerContainer);
    const blurb = createHtmlElement('p', null, ['reservations-header__blurb'], 'As one of the premiere eateries in Los Angeles it is recommended that you book 4-6 weeks in advance. Thank you for your patience.', headerContainer);


    const reservationsForm = createHtmlElement('form', 'reservationsForm', ['form', 'form--reservations'], null, section);
    const reservationsFormContainer = createHtmlElement('div', null, ['form__container'], null, reservationsForm);

    const dateGroup = createHtmlElement('div', null, ['form__group'], null, reservationsFormContainer);
    const dateLabel = createFormLabel('date', ['form__label'], 'Date', dateGroup);
    const dateInput = createFormInput('date', 'date', 'date', ['form__input'], null, dateGroup);

    const timeGroup = createHtmlElement('div', null, ['form__group', 'form__label'], null, reservationsFormContainer);
    const timeLabel = createFormLabel('time', ['form__label'], 'Time', timeGroup);
    const timeInput = createFormInput('time', 'time', 'time', ['form__input'], 'Reservation time', timeGroup);
    
    const nameGroup = createHtmlElement('div', null, ['form__group'], null, reservationsFormContainer);
    const nameLabel = createFormLabel('name', ['form__label'], 'Name', nameGroup);
    const nameInput = createFormInput('text', 'name', 'name', ['form__input'], 'Your Full Name', nameGroup);

    const phoneGroup = createHtmlElement('div', null, ['form__group'], null, reservationsFormContainer);
    const phoneLabel = createFormLabel('message', ['form__label'], 'Phone', phoneGroup);
    const phoneInput = createFormInput('phone', 'phone', 'phone', ['form__input'], 'xxx-xxx-xxxx', phoneGroup);

    const formButton = createHtmlElement('button', 'formSubmitBtn', ['btn'], 'Submit', reservationsFormContainer);

    return main;
}