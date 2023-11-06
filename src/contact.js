import { createFormInput, createFormLabel, createHtmlElement } from "./dom-elements";

export default function contact() {
    const main = createHtmlElement('main', 'main', null, null, null);
    const section = createHtmlElement('section', null, ['container', 'container--small'], null, main);

    const header = createHtmlElement('header', null, ['contact-header'], null, section);
    const headerContainer = createHtmlElement('div', null, ['container'], null, header)
    const title = createHtmlElement('h1', null, ['title'], 'Contact Us', headerContainer);
    const blurb = createHtmlElement('p', null, ['contact-header__blurb'], 'Questions or concerns? Contact us below', headerContainer);


    const contactForm = createHtmlElement('form', 'contactForm', ['form'], null, section);
    const contactFormContainer = createHtmlElement('div', null, ['form__container'], null, contactForm);
    
    const nameGroup = createHtmlElement('div', null, ['form__group'], null, contactFormContainer);
    const contactFormNameLabel = createFormLabel('name', ['form__label'], 'Name', nameGroup);
    const contactFormNameInput = createFormInput('text', 'name', 'name', ['form__input'], 'Your Full Name', nameGroup);

    const emailGroup = createHtmlElement('div', null, ['form__group'], null, contactFormContainer);
    const contactFormEmailLabel = createFormLabel('email', ['form__label'], 'Email', emailGroup);
    const contactFormEmailInput = createFormInput('email', 'email', 'email', ['form__input'], 'Enter email address', emailGroup);

    const subjectGroup = createHtmlElement('div', null, ['form__group', 'contact-form__label--subject'], null, contactFormContainer);
    const contactFormSubjectLabel = createFormLabel('subject', ['form__label'], 'Subject', subjectGroup);
    const contactFormSubjectInput = createFormInput('text', 'subject', 'subject', ['form__input'], 'Enter the subject of your message', subjectGroup);

    const messageGroup = createHtmlElement('div', null, ['form__group', 'contact-form__label--message'], null, contactFormContainer);
    const contactFormMessageLabel = createFormLabel('message', ['form__label'], 'Message', messageGroup);
    const contactFormMessageInput = createFormInput('text', 'message', 'message', ['form__input'], 'Write your message', messageGroup);

    const formButton = createHtmlElement('button', 'formSubmitBtn', ['btn'], 'Submit', contactFormContainer);

    return main;
}