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

// export const createCard = (src, item, description, price, parent) => {
//   const newCard = document.createElement('div');
//   newCard.setAttribute('class', ['card', 'card--menu']);
  
//   const cardImage = document.createElement('img');
//   cardImage.setAttribute('class', 'card-img');
//   cardImage.setAttribute('src', src);
//   cardImage.style.width = '150px';
  
//   const cardItem = document.createElement('h2');
//   cardItem.innerText = item;

//   const cardDescription = document.createElement('p');
//   cardDescription.setAttribute('class', 'card-desc');
//   cardDescription.innerText = description;

//   const cardPrice = document.createElement('p');
//   cardPrice.setAttribute('class', 'card-price');
//   cardPrice.innerText = price;

//   parent.appendChild(newCard);
//   newCard.appendChild(cardImage, cardItem, cardDescription, cardPrice); 
// }
