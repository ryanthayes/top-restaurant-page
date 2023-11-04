export const createHtmlElement = (type, id, classes, content, parent) => {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (classes)
    classes.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerText = content;
  if (parent) parent.appendChild(element);
  
  return element;
}

export const createImg = (classes, src, parent) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("class", classes);
  newImg.setAttribute("src", src);
  parent.appendChild(newImg);
  return newImg;
};