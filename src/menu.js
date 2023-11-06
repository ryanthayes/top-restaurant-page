import { createHtmlElement } from "./dom-elements";

export default function menu() {
    const main = document.createElement('main');
    const header = createHtmlElement('header',null, ['menu-header'], null, main);
    const menuTitle = createHtmlElement('h1', null, ['title'], 'Our Menu', header);
    const menuBlurb = createHtmlElement('p', null, ['menu-header__blurb'], 'We pride ourself on using only the freshest ingredients with a focus on locally sourced ingredients whenever possible.', header);

    const menuSection = createHtmlElement('section', null, ['menu'], null, null);
    const container = createHtmlElement('div', null, ['container'], null, menuSection);
    const cardContainer = createHtmlElement('div', null, ['menu-card__container'], null, container);

    let cards = [
        {
          title: 'Acai Bowl',
          src: 'images/vicky-ng-yIh0i6TYGrs-unsplash.jpg',
          body: 'Lorem ipsum dolor sit amet.',
          price: '$12.99',
        },
        {
          title: 'Avocado Toast',
          src: 'images/alexandra-kusper-7MqA9uQZc2Y-unsplash.jpg',
          body: 'Lorem ipsum dolor sit amet.',
          price: '$12.99',
        },
        {
          title: 'Eggs Florentine',
          src: 'images/maddi-bazzocco-j3gz0KReZbA-unsplash.jpg',
          body: 'Lorem ipsum dolor sit amet.',
          price: '$15.99',
        },
        {
          title: 'Shrimp Benedict',
          src: 'images/jennifer-latuperisa-andresen-247JU9v0S8A-unsplash.jpg',
          body: 'Lorem ipsum dolor sit amet.',
          price: '$18.99',
        },
        {
          title: 'French Toast',
          src: 'images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg',
          body: 'Lorem ipsum dolor sit amet.',
          price: '$12.99',
        },
        {
          title: 'Flapjacks',
          src: 'images/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg',
          body: 'Lorem ipsum dolor sit amet.',
          price: '$14.99',
        }
      ];
      
      const createNewCard = (card) => {
      
      const newCard = document.createElement('div');
      newCard.className = 'card card--menu';
      
      const cardImage = document.createElement('img');
      cardImage.setAttribute("src", card.src);
      cardImage.className = 'card-img';
      
      const cardTitle = document.createElement('h2');
      cardTitle.innerText = card.title;
      cardTitle.className = 'card-title';
      
      const cardBody = document.createElement('p');
      cardBody.innerText = card.body;
      cardBody.className = 'card-body';
      
      const cardPrice = document.createElement('p');
      cardPrice.innerText = card.price;
      cardPrice.className = 'card-price'
      
      newCard.appendChild(cardImage, cardTitle, cardBody, cardPrice);
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