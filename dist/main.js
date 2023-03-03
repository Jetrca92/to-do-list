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

eval("// Array for storing tasks\r\nlet myTasks = [];\r\n\r\n// Tasks class\r\nclass Task {\r\n    constructor(name, description, date, urgent) {\r\n        this.name = name;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.urgent = urgent;\r\n    }\r\n    info() {\r\n        console.log(`${this.name} - ${this.description}, due on ${this.date}, ${this.urgent ? 'urgent' : 'not urgent'}`);\r\n    }\r\n}\r\n\r\n// Adds task to array\r\nfunction addTask() {\r\n    const name = document.querySelector('#task-name').value;\r\n    const description = document.querySelector('#task-description').value;\r\n    const date = document.querySelector('#task-date').value;\r\n    const urgent = document.querySelector('#task-urgent').checked;\r\n    const task = new Task(name, description, date, urgent);\r\n    myTasks.push(task);\r\n    console.log(myTasks);\r\n    //add function to add new task to display\r\n}\r\n\r\n// Get buttons\r\nconst inboxBtn = document.querySelector('#inbox');\r\nconst todayBtn = document.querySelector('#today');\r\nconst upcomingBtn = document.querySelector('#upcoming');\r\nconst projectsBtn = document.querySelector('#projects');\r\nconst addTaskBtn = document.querySelector('#addTask');\r\n\r\n// Handle submit form\r\ndocument.querySelector('#form').addEventListener('submit', (event) => {\r\n    event.preventDefault(); // prevent load\r\n\r\n    // Add task, clear form value\r\n    addTask();\r\n    document.querySelector('#task-name').value = \"\";\r\n    document.querySelector('#task-description').value = \"\";\r\n    document.querySelector('#task-date').value = \"\";\r\n    document.querySelector('#task-urgent').checked = false;\r\n    document.querySelector('.add-task-form').style.display = 'none';\r\n    return false;\r\n});\r\n\r\naddTaskBtn.addEventListener('click', () => {\r\n    const form = document.querySelector('.add-task-form');\r\n    if ((form.style.display === 'none') || (!form.style.display)) {\r\n        form.style.display = 'block';\r\n        setTimeout(() => {\r\n            form.style.opacity = 1;\r\n        }, 0);\r\n    }\r\n    else {\r\n        form.style.opacity = 0;\r\n        setTimeout(() => {\r\n            form.style.display = 'none';    \r\n        }, 400);\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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