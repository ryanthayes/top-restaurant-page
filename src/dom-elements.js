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