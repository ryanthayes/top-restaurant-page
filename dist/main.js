/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-elements.js":
/*!*****************************!*\
  !*** ./src/dom-elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement),\n/* harmony export */   createImg: () => (/* binding */ createImg)\n/* harmony export */ });\nconst createHtmlElement = (type, id, classes, content, parent) => {\n  const element = document.createElement(type);\n  if (id) element.id = id;\n  if (classes)\n    classes.forEach((myClass) => element.classList.add(myClass));\n  if (content) element.innerText = content;\n  if (parent) parent.appendChild(element);\n  \n  return element;\n}\n\nconst createImg = (classes, src, parent) => {\n  const newImg = document.createElement(\"img\");\n  newImg.setAttribute(\"class\", classes);\n  newImg.setAttribute(\"src\", src);\n  parent.appendChild(newImg);\n  return newImg;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./src/dom-elements.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _images_logo_footer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo-footer.png */ \"./src/images/logo-footer.png\");\n/* harmony import */ var _images_logo_footer_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_logo_footer_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\n\n\nfunction footer() {\n    const footer = document.createElement('footer');\n    footer.className = 'footer';\n    \n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, ['container', 'three-col', 'justify-content-between'], null, footer);\n\n    const logo = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createImg)('footer-logo', (_images_logo_footer_png__WEBPACK_IMPORTED_MODULE_0___default()), container);\n\n    const location = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, null, null, container);\n    const locationTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', null, ['title--sm', '|', 'mb-sm'], 'Location', location);\n    const locationP1 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, '123 Elm Street', location)\n    const locationP2 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, 'Hollywood, CA', location)\n\n    const hours = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, null, null, container);\n    const hoursTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', null, ['title--sm', '|', 'mb-sm'], 'Hours', hours);\n    const hoursP1 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, 'Mon - Fri: 11am - 8pm', hours)\n    const hoursP2 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, 'Sat & Sun: 9am - 10pm', hours)\n\n    return footer;\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\nfunction header() {\n\n    const header = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', 'header', null, null, null);\n    const nav = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('nav', 'nav-bar', ['nav-bar'], null, header);\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['container', '|', 'flex', 'justify-content-between'], null, nav);\n    \n    // const logo = createImg('site-logo', Logo, container);\n\n    const primaryNav = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul', null, ['primary-nav', '|', 'flex', 'gap-md', 'align-items-center'], null, container);\n    const home = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    const homeLink = document.createElement('a');\n    homeLink.setAttribute('href', '#');\n    homeLink.innerText = 'Home';\n    home.appendChild(homeLink);\n    const menu = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    const menuLink = document.createElement('a');\n    menuLink.setAttribute('href', '#');\n    menuLink.innerText = 'Menu';\n    menu.appendChild(menuLink);\n    const about = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    const aboutLink = document.createElement('a');\n    aboutLink.setAttribute('href', '#');\n    aboutLink.innerText = 'About';\n    about.appendChild(aboutLink);\n    const contact = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    const contactLink = document.createElement('a');\n    contactLink.setAttribute('href', '#');\n    contactLink.innerText = 'Contact Us';\n    contact.appendChild(contactLink);\n\n    const button = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', null, ['btn'], 'Book A Table', container);\n\n    return header;\n}\n\n\n{/* <header id=\"header\" class=\"\">\n            <nav id=\"nav-bar\" class=\"nav-bar \">\n                <div class=\"container | flex justify-content-between \">\n                    <img src=\"/src/images/logo.png\" alt=\"\" class=\"site-logo\">\n                    <ul class=\"primary-nav | flex gap-md align-items-center\">\n                        <li class=\"primary-nav__items\"><a href=\"#\">Home</a></li>\n                        <li class=\"primary-nav__items\"><a href=\"#\">Menu</a></li>\n                        <li class=\"primary-nav__items\"><a href=\"#\">About</a></li>\n                        <li class=\"primary-nav__items\"><a href=\"#\">Contact</a></li>\n                    </ul>\n                    <button class=\"btn |\">Book A Table</button>\n                        \n                </div>\n                \n            </nav>\n        </header> */}\n\n//# sourceURL=webpack://top-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\nfunction home() {\n    \n    const main = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'main', ['main'], null, null);\n    const hero = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('section', null, ['hero', '|', 'flex', 'align-items-center'], null, main);\n    const heroContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['container--hero'], null, hero);\n    const heroTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', null, ['title'], 'Treat Your Taste Buds to a Blissful Experience', heroContainer);\n    const heroBlurb = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, ['hero-blurb'], 'Discover delectable cuisine and experience unforgettable moments with friends, family, and loved ones.', heroContainer);\n    const btnContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['hero-btn__container'], null, heroContainer);\n    const primaryBtn = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', null, ['btn'], 'Book a Table', btnContainer);\n    const secondaryBtn = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', null, ['btn', 'btn--secondary'], 'Explore Our Menu', btnContainer);\n\n    return main;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/images/logo-footer.png":
/*!************************************!*\
  !*** ./src/images/logo-footer.png ***!
  \************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/logo-footer.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\nfunction renderDOM() {\n    const content = document.querySelector('#content');\n    content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\n\nrenderDOM();\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;