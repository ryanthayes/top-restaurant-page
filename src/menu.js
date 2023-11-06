import acaiBowl from './images/vicky-ng-yIh0i6TYGrs-unsplash.jpg';
import avocadoToast from './images/alexandra-kusper-7MqA9uQZc2Y-unsplash.jpg';
import eggsFlorentine from './images/maddi-bazzocco-j3gz0KReZbA-unsplash.jpg';
import shrimpBenedict from './images/jennifer-latuperisa-andresen-247JU9v0S8A-unsplash.jpg';
import frenchToast from './images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg';
import flapJacks from './images/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg';

import { createHtmlElement } from "./dom-elements";

export default function menu() {
    const main = document.createElement('main');
    const header = createHtmlElement('header',null, ['menu-header'], null, main);
    const headerContainer = createHtmlElement('div', null, ['container'], null, header)
    const menuTitle = createHtmlElement('h1', null, ['title'], 'Our Menu', headerContainer);
    const menuBlurb = createHtmlElement('p', null, ['menu-header__blurb'], 'We pride ourself on using only the freshest ingredients with a focus on locally sourced ingredients whenever possible.', headerContainer);

    const menuSection = createHtmlElement('section', null, ['menu'], null, main);
    const container = createHtmlElement('div', null, ['container'], null, menuSection);
    const cardContainer = createHtmlElement('div', null, ['menu-card__container'], null, container);

    let cards = [
        {
          title: 'Acai Bowl',
          src: acaiBowl,
          body: 'Lorem ipsum dolor sit amet.',
          price: '$12.99',
        },
        {
          title: 'Avocado Toast',
          src: avocadoToast,
          body: 'Lorem ipsum dolor sit amet.',
          price: '$12.99',
        },
        {
          title: 'Eggs Florentine',
          src: eggsFlorentine,
          body: 'Lorem ipsum dolor sit amet.',
          price: '$15.99',
        },
        {
          title: 'Shrimp Benedict',
          src: shrimpBenedict,
          body: 'Lorem ipsum dolor sit amet.',
          price: '$18.99',
        },
        {
          title: 'French Toast',
          src: frenchToast,
          body: 'Lorem ipsum dolor sit amet.',
          price: '$12.99',
        },
        {
          title: 'Flapjacks',
          src: flapJacks,
          body: 'Lorem ipsum dolor sit amet.',
          price: '$14.99',
        }
      ];
      
      const createNewCard = (card) => {
      
      const newCard = document.createElement('div');
      newCard.className = 'card card--menu';
      
      const cardImage = document.createElement('img');
      cardImage.setAttribute("src", card.src);
      cardImage.className = 'menu-card__img';
      
      const cardTitle = document.createElement('h2');
      cardTitle.innerText = card.title;
      cardTitle.className = 'menu-card__title';
      
      const cardBody = document.createElement('p');
      cardBody.innerText = card.body;
      cardBody.className = 'menu-card__body';
      
      const cardPrice = document.createElement('p');
      cardPrice.innerText = card.price;
      cardPrice.className = 'menu-card__price'
      
      newCard.append(cardImage, cardTitle, cardBody, cardPrice);
      cardContainer.appendChild(newCard);
      
      };
      
      const createCards = () => {
      
        cards.forEach((card) => {
          createNewCard(card);
        });
      };
      
      createCards();

      return main;
}