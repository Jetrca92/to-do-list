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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Get buttons\r\nconst inboxBtn = document.querySelector('#inbox');\r\nconst todayBtn = document.querySelector('#today');\r\nconst upcomingBtn = document.querySelector('#upcoming');\r\nconst projectsBtn = document.querySelector('#projects');\r\nconst addTaskBtn = document.querySelector('#addTask');\r\n\r\naddTaskBtn.addEventListener('click', () => {\r\n    const form = document.querySelector('.add-task-form');\r\n    if ((form.style.display === 'none') || (!form.style.display)) {\r\n        form.style.display = 'block';\r\n        setTimeout(() => {\r\n            form.style.opacity = 1;\r\n        }, 0);\r\n    }\r\n    else {\r\n        form.style.opacity = 0;\r\n        setTimeout(() => {\r\n            form.style.display = 'none';    \r\n        }, 400);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;