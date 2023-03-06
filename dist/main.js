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

eval("// Array for storing tasks\r\nlet myTasks = [];\r\n\r\n// Tasks class\r\nclass Task {\r\n    constructor(name, description, date, urgent) {\r\n        this.name = name;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.urgent = urgent;\r\n        this.complete = false;\r\n    }\r\n    info() {\r\n        console.log(`${this.name} - ${this.description}, due on ${this.date}, ${this.urgent ? 'urgent' : 'not urgent'}`);\r\n    }\r\n}\r\n\r\n// Adds task to array\r\nfunction addTask() {\r\n    const name = document.querySelector('#task-name').value;\r\n    const description = document.querySelector('#task-description').value;\r\n    const date = document.querySelector('#task-date').value;\r\n    const urgent = document.querySelector('#task-urgent').checked;\r\n    const task = new Task(name, description, date, urgent);\r\n    myTasks.push(task);\r\n    createTaskLi(task);\r\n    //add function to add new task to display\r\n}\r\n\r\n// Display task in list\r\nfunction createTaskLi(task) {\r\n    const ul = document.querySelector('#listUl');\r\n\r\n    // Create elements, set class, innerhtml\r\n    const li = document.createElement('li');\r\n    const taskItem = document.createElement('div');\r\n    const listCheckmark = document.createElement('div');\r\n    const img = document.createElement('img');\r\n    const listContent = document.createElement('div');\r\n    const contentHeader = document.createElement('div');\r\n    const div1 = document.createElement('div');\r\n    const taskName = document.createElement('b');\r\n    const taskUrgent = document.createElement('span');\r\n    const div2 = document.createElement('div');\r\n    const date = document.createElement('span');\r\n    const listBody = document.createElement('div');\r\n    const description = document.createElement('p');\r\n\r\n    li.setAttribute('class', 'list-group-item');\r\n    taskItem.setAttribute('class', 'task-item');\r\n    listCheckmark.classList.add('list-checkmark', 'me-3');\r\n    img.classList.add('unchecked-btn', 'clickable');\r\n    img.setAttribute('src', '../src/images/check.png');\r\n    img.setAttribute('alt', 'check icon');\r\n    listContent.setAttribute('class', 'list-content');\r\n    contentHeader.classList.add('d-flex', 'justify-content-between');\r\n    taskName.setAttribute('class', 'me-3');\r\n    listBody.setAttribute('class', 'list-body');\r\n    description.classList.add('d-flex', 'flex-wrap');\r\n\r\n    taskName.innerHTML = task.name;\r\n    date.innerHTML = task.date;\r\n    description.innerHTML = task.description;\r\n\r\n    // Css for task urgent\r\n    if (task.urget) {\r\n        taskUrgent.innerHTML = \"(Urgent)\";\r\n    } else {\r\n        taskUrgent.innerHTML = \"(Not urgent)\";\r\n    }\r\n\r\n    listCheckmark.appendChild(img);\r\n    taskItem.appendChild(listCheckmark);\r\n    div1.appendChild(taskName);\r\n    div1.appendChild(taskUrgent);\r\n    div2.appendChild(date);\r\n    contentHeader.appendChild(div1);\r\n    contentHeader.appendChild(div2);\r\n    listContent.appendChild(contentHeader);\r\n    listBody.appendChild(description);\r\n    listContent.appendChild(listBody);\r\n    taskItem.appendChild(listContent);\r\n    li.appendChild(taskItem);\r\n    ul.appendChild(li);\r\n}\r\n\r\n\r\n\r\n// Get buttons\r\nconst inboxBtn = document.querySelector('#inbox');\r\nconst todayBtn = document.querySelector('#today');\r\nconst upcomingBtn = document.querySelector('#upcoming');\r\nconst projectsBtn = document.querySelector('#projects');\r\nconst addTaskBtn = document.querySelector('#addTask');\r\n\r\n// Handle submit form\r\ndocument.querySelector('#form').addEventListener('submit', (event) => {\r\n    event.preventDefault(); // prevent load\r\n\r\n    // Add task, clear form value\r\n    addTask();\r\n    document.querySelector('#task-name').value = \"\";\r\n    document.querySelector('#task-description').value = \"\";\r\n    document.querySelector('#task-date').value = \"\";\r\n    document.querySelector('#task-urgent').checked = false;\r\n    document.querySelector('.add-task-form').style.display = 'none';\r\n    return false;\r\n});\r\n\r\naddTaskBtn.addEventListener('click', () => {\r\n    const form = document.querySelector('.add-task-form');\r\n    if ((form.style.display === 'none') || (!form.style.display)) {\r\n        form.style.display = 'block';\r\n        setTimeout(() => {\r\n            form.style.opacity = 1;\r\n        }, 0);\r\n    }\r\n    else {\r\n        form.style.opacity = 0;\r\n        setTimeout(() => {\r\n            form.style.display = 'none';    \r\n        }, 400);\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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