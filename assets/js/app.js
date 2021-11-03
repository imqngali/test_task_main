/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("$(document).ready(function() {\r\n    $('.menu-burger__header').click(function() {\r\n        $('.menu-burger__header').toggleClass('open-menu');\r\n        $('.nav_items').toggleClass('active');\r\n    });\r\n\r\n    $('#signup').click(function() {\r\n        $('#sign_up_openModal').addClass('open-modal');\r\n    });\r\n\r\n    $('#sign_up_close').click(function() {\r\n        $('#sign_up_openModal').removeClass('open-modal');\r\n    });\r\n\r\n    $('#openSuccess').click(function() {\r\n        $('#sign_up_openModal').removeClass('open-modal');\r\n    });\r\n\r\n    $('#openSuccess').click(function() {\r\n        $('#sign_up_success').addClass('open-modal');\r\n    });\r\n\r\n    $('#sign_up_closeSuccess').click(function() {\r\n        $('#sign_up_success').removeClass('open-modal');\r\n    });\r\n});\r\n\r\n\r\n\r\n\r\nconst subscribe = document.getElementById('subscribe');\r\n\r\nfunction getSubscribed(event) {\r\n    event.preventDefault();\r\n\r\n    const email = subscribe.querySelector('[name=\"user_mail\"]');\r\n\r\n    const values = {\r\n        email: email.value \r\n    };\r\n\r\n    console.log(values);\r\n}\r\n\r\nsubscribe.addEventListener('submit', getSubscribed);\r\n\r\n\r\nconst register = document.getElementById('register');\r\n\r\nfunction getRegister(event) {\r\n    event.preventDefault();\r\n\r\n    const email = subscribe.querySelector('[name=\"email\"]'),\r\n        tel = subscribe.querySelector('[name=\"tel\"]'),\r\n        password = subscribe.querySelector('[name=\"password\"]');\r\n\r\n    const values = {\r\n        email: email.value,\r\n        tel: tel.value,\r\n        password: password.value\r\n    };\r\n\r\n    console.log(values);\r\n}\r\n\r\nregister.addEventListener('submit', getRegister);\r\n\r\n\r\nvar data = $('#subscribe').serialize();\r\n$.ajax({\r\n   type: \"POST\",\r\n   url: \"http://localhost:3000/add?\",\r\n   data: data,\r\n   success: function(msg) {\r\n     alert(msg);\r\n   }\r\n });\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;