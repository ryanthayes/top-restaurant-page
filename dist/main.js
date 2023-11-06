/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/hero-bg.png */ \"./src/images/hero-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* === CSS VARIABLES === */\n\n:root {\n\n    /* Colors */\n    --clr-neutral-100: hsl(0, 0%, 100%);\n    --clr-neutral-200: hsl(0, 0%, 90%);\n    --clr-neutral-300: hsl(0, 0%, 83%);\n    --clr-neutral-400: hsl(0, 0%, 64%);\n    --clr-neutral-500: hsl(0, 0%, 45%);\n    --clr-neutral-600: hsl(0, 0%, 32%);\n    --clr-neutral-700: hsl(0, 0%, 15%);\n    --clr-neutral-800: hsl(0, 0%, 9%);\n    --clr-neutral-900: hsl(0, 0%, 4%);\n\n    --clr-primary-100: hsl(0, 93%, 94%);\n    --clr-primary-200: hsl(0, 96%, 89%);\n    --clr-primary-300: hsl(0, 94%, 82%);\n    --clr-primary-400: hsl(0, 91%, 71%);\n    --clr-primary-500: hsl(0, 84%, 60%);\n    --clr-primary-600: hsl(0, 72%, 51%);\n    --clr-primary-700: hsl(0, 74%, 42%);\n    --clr-primary-800: hsl(0, 70%, 35%);\n    --clr-primary-900: hsl(0, 75%, 15%);\n  \n    --shadow: 0 5px 10px rgba(0, 0, 0, .3);\n  \n  \n    /* Fonts */\n    --ff-primary: 'Poppins', sans-serif;\n    --ff-secondary: 'Playfair Display', serif;\n  \n    --fs-100: 0.625rem;\n    --fs-200: 0.75rem;\n    --fs-300: 0.875rem;\n    --fs-400: 1rem;\n    --fs-500: 1.25rem;\n    --fs-600: 1.5rem;\n    --fs-700: 2.25rem;\n    --fs-800: 3rem;\n    --fs-900: 4rem;\n  \n    --fw-normal: 400;\n    --fw-medium: 500;\n    --fw-semibold: 600;\n    --fw-bold: 700;\n  \n    --spacing-xs: 0.5rem;\n    --spacing-sm: 1rem;\n    --spacing-md: 2rem;\n    --spacing-lg: 4rem;\n  \n    --br-sm: 0.25em;\n    --br-md: 0.5em;\n    --br-lg: 1.5em;\n\n  }\n  \n  @media (max-width: 35em) {\n    :root {\n        --fs-100: 0.5rem;\n        --fs-200: 0.625rem;\n        --fs-300: 0.75rem;\n        --fs-400: .875rem;\n        --fs-500: 1rem;\n        --fs-600: 1.25rem;\n        --fs-700: 1.75rem;\n        --fs-800: 2.25rem;\n        --fs-900: 3rem;\n    }\n  }\n  \n  /* === CSS RESET === */\n  \n  /* makes sizing simpler */\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  /* remove default spacing */\n  /* force styling of type through styling, rather than elements */\n  \n  * {\n    margin: 0;\n    padding: 0;\n    font: inherit;\n  }\n  \n  /* min body height */\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n  }\n  \n  /* responsive images/videos */\n  img,\n  picture,\n  svg,\n  video {\n    display: block;\n    max-width: 100%;\n  }\n  \n  /* === GENERAL STYLES === */\n\n  body {\n    font-family: var(--ff-primary);\n    font-size: var(--fs-400);\n    font-weight: var(--fw-normal);\n    color: var(--clr-neutral-600);\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-secondary);\n    letter-spacing: 1.2px;\n    line-height: 1.1;\n  }\n\n.title {\n    margin-bottom: var(--spacing-md);\n    font-size: var(--fs-800);\n    font-weight: var(--fw-bold);\n    color: var(--clr-primary-700);\n}\n\n.title--md {\n    font-size: var(--fs-700);\n    font-weight: var(--fw-bold);\n    color: var(--clr-neutral-600);\n}\n\n.title--sm {\n    font-size: var(--fs-500);\n    font-weight: var(--fw-bold);\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-sm);\n    border-radius: var(--br-md);\n    box-shadow: var(--shadow);\n    overflow: hidden;\n}\n\n/* === HEADER === */\n\n.nav-bar {\n    padding: var(--spacing-sm) 0;\n    box-shadow: var(--shadow);\n}\n\n.site-logo {\n    cursor: pointer;\n    max-width: 150px;\n}\n\n.primary-nav__items {\n    list-style: none;\n}\n.primary-nav__items a {\n    /* padding: var(--spacing-sm); */\n    color: var(--clr-neutral-500);\n    text-decoration: none;\n}\n\n.social-icons {\n    cursor: pointer;\n    fill: var(--clr-neutral-100);\n}\n\n/* === HERO SECTION === */\n\n.hero {\n    height: 90vh;\n    text-align: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.hero-blurb {\n    margin-bottom: var(--spacing-sm);\n}\n\n.hero-btn__container {\n    display: flex;\n    gap: var(--spacing-sm);\n    justify-content: center;\n}\n\n/* === FOOTER === */\n\n.footer {\n    padding: var(--spacing-lg);\n    color: var(--clr-primary-100);\n    background-color: var(--clr-primary-800);\n}\n\n.footer__logo {\n    max-width: 200px;\n}\n\n.footer__about-text {\n    max-width: 30ch;\n}\n\n.footer__menu-items {\n    list-style: none;\n}\n\n.footer__menu-items a {\n    text-decoration: none;\n    color: var(--clr-primary-100);\n}\n\n/* === RESERVATION PAGE === */\n\n.reservations-form {\n    max-width: 600px;\n    margin: var(--spacing-md) auto;\n    padding: var(--spacing-md);\n    border-radius: var(--br-md);\n    box-shadow: var(--shadow);\n}\n\n.reservations-label {\n    margin-bottom: var(--spacing-xs);\n    font-weight: var(--fw-bold);\n    color: var(--clr-primary-700);\n}\n.reservations-input {\n    margin-bottom: var(--spacing-sm);\n    padding: var(--spacing-xs);\n    border: 1px solid var(--clr-neutral-300);\n    border-radius: var(--br-lg);\n    color: var(--clr-neutral-400);\n}\n\n.party-size {\n    grid-column: 1 / 3;\n}\n\n.btn--reservation {\n    grid-column: 1 / 3; \n}\n\n/* === ABOUT PAGE === */\n\n.about-hero {\n    margin: var(--spacing-lg) auto;\n}\n\n.hero-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n/* === MENU PAGE === */\n\n.menu-header {\n    margin-top: var(--spacing-lg);\n    padding: var(--spacing-md);\n    text-align: center;\n}\n\n.menu-card__container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-md);\n}\n\n.card--menu {\n    max-width: 300px;\n    text-align: center;\n}\n\n.menu-card__img {\n    width: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n.menu-card__title {\n    font-family: var(--ff-secondary);\n    font-weight: var(--fw-bold);\n    color: var(--clr-primary-700);\n}\n\n.menu-card__body {\n    font-size: var(--fs-300);\n    color: var(--clr-primary-800);\n}\n\n.menu-card__price {\n    font-weight: var(--fw-bold);\n    color: var(--clr-primary-600);\n    margin-bottom: var(--spacing-sm);\n}\n\n/* === CONTACT US PAGE === */\n\n.contact-header, .reservations-header {\n    margin-top: var(--spacing-lg);\n    text-align: center;\n}\n\n.contact-form__label--subject {\n    grid-column: 1 / span 2;\n}\n.contact-form__label--message {\n    grid-column: 1 / span 2;\n}\n\n/* === FORMS === */\n\n.form {\n    margin: var(--spacing-lg) auto;\n    padding: var(--spacing-md);\n    background: var(--clr-primary-100);\n    border-radius: var(--br-md);\n    box-shadow: var(--shadow);\n}\n\n.form__container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-sm);\n}\n\n.form__group {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs);\n}\n\n.form__label {\n    font-weight: var(--fw-semibold);\n    color: var(--clr-primary-700);\n}\n.form__input {\n    padding: var(--spacing-xs);\n    font-size: var(--fs-300);\n    background-color: var(--clr-primary-200);\n    border: 0;\n    border-radius: var(--br-lg);\n}\n\n\n/* === BUTTONS === */\n\n.btn {\n    cursor: pointer;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    font-size: var(--fs-300);\n    color: var(--clr-primary-100);\n    background-color: var(--clr-primary-700);\n    border: 0;\n    border-radius: var(--br-lg);\n    box-shadow: var(--shadow);\n}\n\n.btn:hover,\n.btn:focus {\n    box-shadow: none;\n    transform: translateY(2px);\n}\n\n.btn--secondary {\n    color: var(--clr-primary-700);\n    background-color: var(--clr-neutral-100);\n    border: 1px solid var(--clr-primary-700);\n}\n\n/* === UTILITY CLASSES === */\n\n.no-bullets {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.container {\n    max-width: 1170px;\n    padding: 0 var(--spacing-sm);\n    margin: 0 auto;\n}\n.container--small {\n    max-width: 75ch;\n    padding: var(--spacing-lg);\n    margin: 0 auto;\n}\n.four-col {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n    gap: var(--spacing-md);\n}\n.three-col {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    gap: var(--spacing-md);\n}\n.two-col {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    gap: var(--spacing-md);\n}\n.flex {\n    display: flex;\n}\n.flex-columns {\n    flex-direction: column;\n}\n.align-items-center {\n    align-items: center;\n}\n.align-content-center {\n    align-content: center;\n}\n.justify-items-center {\n    justify-items: center;\n}\n.justify-content-center {\n    justify-content: center;\n}\n.justify-content-between {\n    justify-content: space-between;\n}\n.text-align-center {\n    text-align: center;\n}\n.align-right {\n    margin-left: auto;\n}\n.gap-xs {\n    gap: var(--spacing-xs)\n}\n.gap-sm {\n    gap: var(--spacing-sm)\n}\n.gap-md {\n    gap: var(--spacing-md)\n}\n.gap-lg {\n    gap: var(--spacing-lg)\n}\n.mb-xs {\n    margin-bottom: var(--spacing-xs)\n}\n.mb-sm {\n    margin-bottom: var(--spacing-sm)\n}\n.mb-md {\n    margin-bottom: var(--spacing-md)\n}\n.mb-lg {\n    margin-bottom: var(--spacing-lg)\n}\n.github:hover {\n    opacity: 50%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _images_chris_liverani_oCsaxvGCehM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chris-liverani-oCsaxvGCehM-unsplash.jpg */ \"./src/images/chris-liverani-oCsaxvGCehM-unsplash.jpg\");\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\n\n\nfunction about() {\n    \n    const main = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('main', 'main', ['main'], null, null);\n    const hero = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('section', null, ['about-hero'], null, main);\n    const heroContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, ['container', '|', 'two-col'], null, hero);\n    const heroImage = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createImg)(['about-hero__image'], _images_chris_liverani_oCsaxvGCehM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__, null, null, heroContainer);\n    const heroContent = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, ['hero-content'], null, heroContainer);\n    const heroTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h1', null, ['title'], 'From our family to yours.', heroContent);\n    const heroBlurb = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, ['hero-blurb'], 'Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city\\'s rich culinary culture, we aim to honor our local roots while infusing a global palate.', heroContent);\n\n    return main;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\nfunction contact() {\n    const main = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'main', null, null, null);\n    const section = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('section', null, ['container', 'container--small'], null, main);\n\n    const header = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', null, ['contact-header'], null, section);\n    const headerContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['container'], null, header)\n    const title = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', null, ['title'], 'Contact Us', headerContainer);\n    const blurb = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, ['contact-header__blurb'], 'Questions or concerns? Contact us below', headerContainer);\n\n\n    const contactForm = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('form', 'contactForm', ['form'], null, section);\n    const contactFormContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__container'], null, contactForm);\n    \n    const nameGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group'], null, contactFormContainer);\n    const contactFormNameLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('name', ['form__label'], 'Name', nameGroup);\n    const contactFormNameInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('text', 'name', 'name', ['form__input'], 'Your Full Name', nameGroup);\n\n    const emailGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group'], null, contactFormContainer);\n    const contactFormEmailLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('email', ['form__label'], 'Email', emailGroup);\n    const contactFormEmailInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('email', 'email', 'email', ['form__input'], 'Enter email address', emailGroup);\n\n    const subjectGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group', 'contact-form__label--subject'], null, contactFormContainer);\n    const contactFormSubjectLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('subject', ['form__label'], 'Subject', subjectGroup);\n    const contactFormSubjectInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('text', 'subject', 'subject', ['form__input'], 'Enter the subject of your message', subjectGroup);\n\n    const messageGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group', 'contact-form__label--message'], null, contactFormContainer);\n    const contactFormMessageLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('message', ['form__label'], 'Message', messageGroup);\n    const contactFormMessageInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('text', 'message', 'message', ['form__input'], 'Write your message', messageGroup);\n\n    const formButton = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'formSubmitBtn', ['btn'], 'Submit', contactFormContainer);\n\n    return main;\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/dom-elements.js":
/*!*****************************!*\
  !*** ./src/dom-elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFormInput: () => (/* binding */ createFormInput),\n/* harmony export */   createFormLabel: () => (/* binding */ createFormLabel),\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement),\n/* harmony export */   createImg: () => (/* binding */ createImg)\n/* harmony export */ });\nconst createHtmlElement = (type, id, classes, content, parent) => {\n  const element = document.createElement(type);\n  if (id) element.id = id;\n  if (classes)\n    classes.forEach((myClass) => element.classList.add(myClass));\n  if (content) element.innerText = content;\n  if (parent) parent.appendChild(element);\n  \n  return element;\n}\n\nconst createImg = (classes, src, width, height, parent) => {\n  const newImg = document.createElement(\"img\");\n  newImg.setAttribute(\"class\", classes);\n  newImg.setAttribute(\"src\", src);\n  newImg.style.width = width;\n  newImg.style.height = height;\n  parent.appendChild(newImg);\n  return newImg;\n};\n\nconst createFormLabel = (input, classes, content, parent) => {\n  const label = document.createElement('label');\n  label.setAttribute('for', input);\n  label.setAttribute('class', classes);\n  label.innerText = content;\n  parent.appendChild(label);\n  return label;\n};\n\nconst createFormInput = (type, id, name, classes, placeholder, parent) => {\n  const input = document.createElement('input');\n  input.setAttribute('type', type);\n  input.setAttribute('id', id);\n  input.setAttribute('name', name);\n  input.setAttribute('class', classes);\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n  return input;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./src/dom-elements.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _images_logo_footer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo-footer.png */ \"./src/images/logo-footer.png\");\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\n\n\nfunction footer() {\n    const footer = document.createElement('footer');\n    footer.className = 'footer';\n    \n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, ['container', 'three-col', 'justify-content-between'], null, footer);\n\n    const logo = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createImg)('footer-logo', _images_logo_footer_png__WEBPACK_IMPORTED_MODULE_0__, '150px', null, container);\n\n    const location = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, null, null, container);\n    const locationTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', null, ['title--sm', '|', 'mb-sm'], 'Location', location);\n    const locationP1 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, '123 Elm Street', location)\n    const locationP2 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, 'Hollywood, CA', location)\n\n    const hours = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, null, null, container);\n    const hoursTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', null, ['title--sm', '|', 'mb-sm'], 'Hours', hours);\n    const hoursP1 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, 'Mon - Fri: 11am - 8pm', hours)\n    const hoursP2 = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', null, null, 'Sat & Sun: 9am - 10pm', hours)\n\n    return footer;\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\n\n\nfunction header() {\n\n    const header = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('header', 'header', null, null, null);\n    const nav = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('nav', 'nav-bar', ['nav-bar'], null, header);\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, ['container', '|', 'flex', 'justify-content-between'], null, nav);\n    \n    const logo = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createImg)('site-logo', _images_logo_png__WEBPACK_IMPORTED_MODULE_0__, '150px', null, container);\n    logo.setAttribute('href', '#');\n    logo.id = 'home';\n\n    const primaryNav = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('ul', null, ['primary-nav', '|', 'flex', 'gap-md', 'align-items-center'], null, container);\n    const home = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    \n    // const homeLink = document.createElement('a');\n    // homeLink.setAttribute('href', '#');\n    // homeLink.id = 'home'\n    // homeLink.innerText = 'Home';\n    // home.appendChild(homeLink);\n    \n    const about = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    const aboutLink = document.createElement('a');\n    aboutLink.setAttribute('href', '#');\n    aboutLink.id = 'about'\n    aboutLink.innerText = 'About';\n    about.appendChild(aboutLink);\n    \n    const menu = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    const menuLink = document.createElement('a');\n    menuLink.setAttribute('href', '#');\n    menuLink.id = 'menu'\n    menuLink.innerText = 'Menu';\n    menu.appendChild(menuLink);\n   \n    const contact = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', null, ['primary-nav__items'], null, primaryNav);\n    const contactLink = document.createElement('a');\n    contactLink.setAttribute('href', '#');\n    contactLink.id = 'contact'\n    contactLink.innerText = 'Contact';\n    contact.appendChild(contactLink);\n\n    const button = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'reservationsNavBtn', ['btn'], 'Book A Table', container);\n\n    return header;\n}\n\n\n{/* <header id=\"header\" class=\"\">\n            <nav id=\"nav-bar\" class=\"nav-bar \">\n                <div class=\"container | flex justify-content-between \">\n                    <img src=\"/src/images/logo.png\" alt=\"\" class=\"site-logo\">\n                    <ul class=\"primary-nav | flex gap-md align-items-center\">\n                        <li class=\"primary-nav__items\"><a href=\"#\">Home</a></li>\n                        <li class=\"primary-nav__items\"><a href=\"#\">Menu</a></li>\n                        <li class=\"primary-nav__items\"><a href=\"#\">About</a></li>\n                        <li class=\"primary-nav__items\"><a href=\"#\">Contact</a></li>\n                    </ul>\n                    <button class=\"btn |\">Book A Table</button>\n                        \n                </div>\n                \n            </nav>\n        </header> */}\n\n//# sourceURL=webpack://top-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\nfunction home() {\n    \n    const main = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'main', ['main'], null, null);\n    const hero = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('section', null, ['hero', '|', 'flex', 'align-items-center'], null, main);\n    const heroContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['container--small'], null, hero);\n    const heroTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', null, ['title'], 'Treat Your Taste Buds to a Blissful Experience', heroContainer);\n    const heroBlurb = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, ['hero-blurb'], 'Discover delectable cuisine and experience unforgettable moments with friends, family, and loved ones.', heroContainer);\n    const btnContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['hero-btn__container'], null, heroContainer);\n    const primaryBtn = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'reservationsHeroBtn', ['btn'], 'Book a Table', btnContainer);\n    const secondaryBtn = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'menuBtn', ['btn', 'btn--secondary'], 'Explore Our Menu', btnContainer);\n\n    return main;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _reservations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservations */ \"./src/reservations.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\n// const removeActive = () => {\n//     navItems.forEach((item) => {\n//         item.classList.remove('active');\n//     });\n// };\n\nconst contentWrapper = document.querySelector('#content');\nconst content = document.createElement('div');\ncontentWrapper.append((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), content, (0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.append((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\nconst navItems = document.querySelectorAll('.primary-nav__items');\nconst siteLogo = document.querySelector('#home');\nconst aboutPage = document.querySelector('#about');\nconst menuPage = document.querySelector('#menu');\nconst contactPage = document.querySelector('#contact');\nconst reservationsNavBtn = document.querySelector('#reservationsNavBtn');\nconst reservationsHeroBtn = document.querySelector('#reservationsHeroBtn');\nconst menuBtn = document.querySelector('#menuBtn');\n\n\nconst renderHome = () => {\n    // removeActive();\n    content.replaceChildren((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\nconst renderAbout = () => {\n    // removeActive();\n    content.replaceChildren((0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n};\nconst renderMenu = () => {\n    // removeActive();\n    content.replaceChildren((0,_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n};\nconst renderContact = () => {\n    // removeActive();\n    content.replaceChildren((0,_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n};\nconst renderReservations = () => {\n    // removeActive();\n    content.replaceChildren((0,_reservations__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n};\n\nsiteLogo.addEventListener('click', renderHome);\naboutPage.addEventListener('click', renderAbout);\nmenuPage.addEventListener('click', renderMenu);\ncontactPage.addEventListener('click', renderContact);\nreservationsNavBtn.addEventListener('click', renderReservations);\nreservationsHeroBtn.addEventListener('click', renderReservations);\nmenuBtn.addEventListener('click', renderMenu);\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_vicky_ng_yIh0i6TYGrs_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/vicky-ng-yIh0i6TYGrs-unsplash.jpg */ \"./src/images/vicky-ng-yIh0i6TYGrs-unsplash.jpg\");\n/* harmony import */ var _images_alexandra_kusper_7MqA9uQZc2Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/alexandra-kusper-7MqA9uQZc2Y-unsplash.jpg */ \"./src/images/alexandra-kusper-7MqA9uQZc2Y-unsplash.jpg\");\n/* harmony import */ var _images_maddi_bazzocco_j3gz0KReZbA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/maddi-bazzocco-j3gz0KReZbA-unsplash.jpg */ \"./src/images/maddi-bazzocco-j3gz0KReZbA-unsplash.jpg\");\n/* harmony import */ var _images_jennifer_latuperisa_andresen_247JU9v0S8A_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/jennifer-latuperisa-andresen-247JU9v0S8A-unsplash.jpg */ \"./src/images/jennifer-latuperisa-andresen-247JU9v0S8A-unsplash.jpg\");\n/* harmony import */ var _images_joseph_gonzalez_zcUgjyqEwe8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg */ \"./src/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg\");\n/* harmony import */ var _images_jaqueline_pelzer_MytHEJlzdcM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg */ \"./src/images/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg\");\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\n\n\n\n\n\n\n\nfunction menu() {\n    const main = document.createElement('main');\n    const header = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_6__.createHtmlElement)('header',null, ['menu-header'], null, main);\n    const headerContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_6__.createHtmlElement)('div', null, ['container'], null, header)\n    const menuTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_6__.createHtmlElement)('h1', null, ['title'], 'Our Menu', headerContainer);\n    const menuBlurb = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_6__.createHtmlElement)('p', null, ['menu-header__blurb'], 'We pride ourself on using only the freshest ingredients with a focus on locally sourced ingredients whenever possible.', headerContainer);\n\n    const menuSection = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_6__.createHtmlElement)('section', null, ['menu'], null, main);\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_6__.createHtmlElement)('div', null, ['container'], null, menuSection);\n    const cardContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_6__.createHtmlElement)('div', null, ['menu-card__container'], null, container);\n\n    let cards = [\n        {\n          title: 'Acai Bowl',\n          src: _images_vicky_ng_yIh0i6TYGrs_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__,\n          body: 'Lorem ipsum dolor sit amet.',\n          price: '$12.99',\n        },\n        {\n          title: 'Avocado Toast',\n          src: _images_alexandra_kusper_7MqA9uQZc2Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__,\n          body: 'Lorem ipsum dolor sit amet.',\n          price: '$12.99',\n        },\n        {\n          title: 'Eggs Florentine',\n          src: _images_maddi_bazzocco_j3gz0KReZbA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__,\n          body: 'Lorem ipsum dolor sit amet.',\n          price: '$15.99',\n        },\n        {\n          title: 'Shrimp Benedict',\n          src: _images_jennifer_latuperisa_andresen_247JU9v0S8A_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__,\n          body: 'Lorem ipsum dolor sit amet.',\n          price: '$18.99',\n        },\n        {\n          title: 'French Toast',\n          src: _images_joseph_gonzalez_zcUgjyqEwe8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__,\n          body: 'Lorem ipsum dolor sit amet.',\n          price: '$12.99',\n        },\n        {\n          title: 'Flapjacks',\n          src: _images_jaqueline_pelzer_MytHEJlzdcM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__,\n          body: 'Lorem ipsum dolor sit amet.',\n          price: '$14.99',\n        }\n      ];\n      \n      const createNewCard = (card) => {\n      \n      const newCard = document.createElement('div');\n      newCard.className = 'card card--menu';\n      \n      const cardImage = document.createElement('img');\n      cardImage.setAttribute(\"src\", card.src);\n      cardImage.className = 'menu-card__img';\n      \n      const cardTitle = document.createElement('h2');\n      cardTitle.innerText = card.title;\n      cardTitle.className = 'menu-card__title';\n      \n      const cardBody = document.createElement('p');\n      cardBody.innerText = card.body;\n      cardBody.className = 'menu-card__body';\n      \n      const cardPrice = document.createElement('p');\n      cardPrice.innerText = card.price;\n      cardPrice.className = 'menu-card__price'\n      \n      newCard.append(cardImage, cardTitle, cardBody, cardPrice);\n      cardContainer.appendChild(newCard);\n      \n      };\n      \n      const createCards = () => {\n      \n        cards.forEach((card) => {\n          createNewCard(card);\n        });\n      };\n      \n      createCards();\n\n      return main;\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reservations)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/dom-elements.js\");\n\n\nfunction reservations() {\n    const main = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'main', null, null, null);\n    const section = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('section', null, ['container', 'container--small'], null, main);\n\n    const header = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', null, ['reservations-header'], null, section);\n    const headerContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['container'], null, header)\n    const title = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', null, ['title'], 'Book a Table', headerContainer);\n    const blurb = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', null, ['reservations-header__blurb'], 'As one of the premiere eateries in Los Angeles it is recommended that you book 4-6 weeks in advance. Thank you for your patience.', headerContainer);\n\n\n    const reservationsForm = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('form', 'reservationsForm', ['form', 'form--reservations'], null, section);\n    const reservationsFormContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__container'], null, reservationsForm);\n\n    const dateGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group'], null, reservationsFormContainer);\n    const dateLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('date', ['form__label'], 'Date', dateGroup);\n    const dateInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('date', 'date', 'date', ['form__input'], null, dateGroup);\n\n    const timeGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group', 'form__label'], null, reservationsFormContainer);\n    const timeLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('time', ['form__label'], 'Time', timeGroup);\n    const timeInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('time', 'time', 'time', ['form__input'], 'Reservation time', timeGroup);\n    \n    const nameGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group'], null, reservationsFormContainer);\n    const nameLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('name', ['form__label'], 'Name', nameGroup);\n    const nameInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('text', 'name', 'name', ['form__input'], 'Your Full Name', nameGroup);\n\n    const phoneGroup = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', null, ['form__group'], null, reservationsFormContainer);\n    const phoneLabel = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormLabel)('message', ['form__label'], 'Phone', phoneGroup);\n    const phoneInput = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('phone', 'phone', 'phone', ['form__input'], 'xxx-xxx-xxxx', phoneGroup);\n\n    const formButton = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'formSubmitBtn', ['btn'], 'Submit', reservationsFormContainer);\n\n    return main;\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/reservations.js?");

/***/ }),

/***/ "./src/images/alexandra-kusper-7MqA9uQZc2Y-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/alexandra-kusper-7MqA9uQZc2Y-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"479466df25f2fa558615.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/alexandra-kusper-7MqA9uQZc2Y-unsplash.jpg?");

/***/ }),

/***/ "./src/images/chris-liverani-oCsaxvGCehM-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/chris-liverani-oCsaxvGCehM-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c10bd65e5d37e73acf21.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/chris-liverani-oCsaxvGCehM-unsplash.jpg?");

/***/ }),

/***/ "./src/images/hero-bg.png":
/*!********************************!*\
  !*** ./src/images/hero-bg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2554ca74866d322ebdf.png\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/hero-bg.png?");

/***/ }),

/***/ "./src/images/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77ce5b405e6ccbf656de.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg?");

/***/ }),

/***/ "./src/images/jennifer-latuperisa-andresen-247JU9v0S8A-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/images/jennifer-latuperisa-andresen-247JU9v0S8A-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58072c150220d0d73047.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/jennifer-latuperisa-andresen-247JU9v0S8A-unsplash.jpg?");

/***/ }),

/***/ "./src/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./src/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e230ab34f6c8c04c44b.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg?");

/***/ }),

/***/ "./src/images/logo-footer.png":
/*!************************************!*\
  !*** ./src/images/logo-footer.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aecc15fd3d8236778227.png\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/logo-footer.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3eb35c1f7cf4ab9fb277.png\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/maddi-bazzocco-j3gz0KReZbA-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/maddi-bazzocco-j3gz0KReZbA-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c99bf9da2b9033efbb2.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/maddi-bazzocco-j3gz0KReZbA-unsplash.jpg?");

/***/ }),

/***/ "./src/images/vicky-ng-yIh0i6TYGrs-unsplash.jpg":
/*!******************************************************!*\
  !*** ./src/images/vicky-ng-yIh0i6TYGrs-unsplash.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71589fe3d66a62db4c52.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/vicky-ng-yIh0i6TYGrs-unsplash.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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