# Restaurant Page

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#what-i-learned">What I learned</a> •
  <a href="#useful-resources">Useful Resources</a> •
  <a href="#contact">Contact</a>
</p>

## Overview 

The purpose of this project was to continue practicing DOM manipulation by dynamically rendering a simple restaurant homepage. The expectation was to sue JavaScript alone to generate the entire contents of the website.

It was a little challenging at first for me to wrap my head around. It is a lot more work, in my opinion, to create all of the "HTML" via JavaScript rather than just creating the content via traditional HTML. But ... get more practice in DOM manipulation is always good.

### Outcomes

- Use of **ES6 modules** to break up the JavaScript into smaller and more manageable files.
-  ALL Content **created via JavaScript**.
- **Dynamically created** "menu cards" from an array.
- Use of **Semantic HTML 5**.
- Use of **CSS Variables**.

### Things to Improve

- Add **active states** to the Primary Navigation.
- Add **responsive design**.

### Desktop Preview

![](desktop-preview.png)

### Live Version

[Restaurant Page](https://ryanthayes.github.io/restaurant-page/)

### Built With

 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## What I learned

  The biggest tip that I got from The Odin Project Discord was to use helper functions (I think that is the technical name) to reduce some of the repetitive time required to generate all of the content via JavaScript.

```js
export const createHtmlElement = (type, id, classes, content, parent) => {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (classes)
    classes.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerText = content;
  if (parent) parent.appendChild(element);
  
  return element;
}

export const createImg = (classes, src, width, height, parent) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("class", classes);
  newImg.setAttribute("src", src);
  newImg.style.width = width;
  newImg.style.height = height;
  parent.appendChild(newImg);
  return newImg;
};

export const createFormLabel = (input, classes, content, parent) => {
  const label = document.createElement('label');
  label.setAttribute('for', input);
  label.setAttribute('class', classes);
  label.innerText = content;
  parent.appendChild(label);
  return label;
};

export const createFormInput = (type, id, name, classes, placeholder, parent) => {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('name', name);
  input.setAttribute('class', classes);
  input.setAttribute('placeholder', placeholder);
  parent.appendChild(input);
  return input;
};
```

## Proud Of

I used an array and helper function to dynamically create "Menu Cards" for the menu page. This would be similar to what an e-commerce site might do to display products. The number of "Menu Cards" could be increased dramatically with a lot less work and repetitive code. 

```js
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
```

## Contact

[![LinkedIN](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryan-t-hayes/)
