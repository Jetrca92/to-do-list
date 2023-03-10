import { compareAsc, format } from 'date-fns'
import './style.css';
import CheckImg from './images/check.png';
import CheckIcon from './images/check.ico';

// Add favicon to header
const head = document.querySelector('head');
const favicon = document.createElement('link');
favicon.setAttribute('rel', 'icon');
favicon.setAttribute('type', 'image/x-icon');
favicon.setAttribute('href', `${CheckIcon}`);
head.appendChild(favicon);

// Add icon to navbar
const checkImg = document.createElement('img');
checkImg.setAttribute('alt', 'check icon');
checkImg.classList.add('title-img');
checkImg.setAttribute('src', `${CheckImg}`);

const h2 = document.createElement('h2');
h2.classList.add('h2');
const span1 = document.createElement('span');
span1.classList.add('blue');
span1.innerHTML = 'To';
const span2 = document.createElement('span');
span2.classList.add('blue-light');
span2.innerHTML = 'Do';
const span3 = document.createElement('span');
span3.classList.add('gray');
span3.innerHTML = 'by Jetrca';
h2.appendChild(span1);
h2.appendChild(span2);
h2.appendChild(span3);
const titleContainer = document.querySelector('.title-container');
titleContainer.appendChild(checkImg);
titleContainer.appendChild(h2);

// Array for storing tasks
let myTasks = [];
let myProjects = [];

// Tasks class
class Task {
    constructor(name, description, date, urgent, project) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.urgent = urgent;
        this.project = project;
        this.complete = false;
    }
    info() {
        console.log(`${this.name} - ${this.description}, due on ${this.date}, ${this.urgent ? 'urgent' : 'not urgent'}`);
    }
}

// Adds task to array
function addTask() {
    const name = document.querySelector('#task-name').value;
    const description = document.querySelector('#task-description').value;
    const date = document.querySelector('#task-date').value;
    const urgent = document.querySelector('#task-urgent').checked;
    const project = document.querySelector('#projectSelect').value;
    const task = new Task(name, description, date, urgent, project);
    myTasks.push(task);
    console.log(myTasks);
    myTasks.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date))); //sort tasks by date asc
    createTaskLi(task, '#listUl');
    //add function to add new task to display
}

// Display task in list
function createTaskLi(task, listul) {
    const ul = document.querySelector(listul);

    // Create elements, set class, innerhtml
    const li = document.createElement('li');
    const taskItem = document.createElement('div');
    const listCheckmark = document.createElement('div');
    const img = document.createElement('img');
    const listContent = document.createElement('div');
    const contentHeader = document.createElement('div');
    const div1 = document.createElement('div');
    const taskName = document.createElement('b');
    const taskUrgent = document.createElement('span');
    
    const div2 = document.createElement('div');
    const date = document.createElement('span');
    const listBody = document.createElement('div');
    const description = document.createElement('p');

    li.setAttribute('class', 'list-group-item');
    taskItem.setAttribute('class', 'task-item');
    listCheckmark.classList.add('list-checkmark', 'me-3');
    img.classList.add('unchecked-btn', 'clickable');
    img.setAttribute('src', `${CheckImg}`);
    img.setAttribute('alt', 'check icon');
    listContent.setAttribute('class', 'list-content');
    contentHeader.classList.add('d-flex', 'justify-content-between');
    taskName.setAttribute('class', 'me-3');
    listBody.setAttribute('class', 'list-body');
    description.classList.add('d-flex', 'flex-wrap');
    
    // create dropDown delete element
    const dropDown = document.createElement("div");
    dropDown.classList.add("dropdown");
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("btn", "btn-sm", "btn-outline-primary", "dropdown-toggle");
    toggleBtn.type = "button";
    toggleBtn.setAttribute("data-bs-toggle", "dropdown");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.textContent = "Delete";
    const dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("dropdown-menu");

    const dropdownMenuItem = document.createElement("li");
    const dropdownMenuItemLink = document.createElement("a");
    dropdownMenuItemLink.classList.add("dropdown-item");
    dropdownMenuItemLink.href = "#";
    dropdownMenuItemLink.textContent = "Delete Task";
    dropdownMenuItem.appendChild(dropdownMenuItemLink);
    dropdownMenu.appendChild(dropdownMenuItem);

    dropDown.appendChild(toggleBtn);
    dropDown.appendChild(dropdownMenu);

    // Add event listener for delete
    dropdownMenuItemLink.addEventListener('click', () => {
        // Find the index of the task to be deleted
        const index = myTasks.findIndex(t => t.name === task.name && t.description === task.description && t.date === task.date && t.urgent === task.urgent && t.project === task.project);
        if (index !== -1) {
            // Remove the task from the myTasks array
            myTasks.splice(index, 1);
            // Remove the task from the DOM
            li.remove();
        }
    });

    taskName.innerHTML = task.name;
    const taskDate = new Date(Date.parse(task.date));
    date.innerHTML = format(taskDate, 'MMM do yyyy');
    description.innerHTML = task.description;

    // Css for task urgent, complete
    if (task.urgent) {
        taskUrgent.innerHTML = "(Urgent)";
    } else {
        taskUrgent.innerHTML = "(Not urgent)";
    }
    if (task.complete) {
        img.classList.value = "checked-btn clickable";
        taskItem.style.textDecoration = "line-through";
    } else {
        img.classList.value = "unchecked-btn clickable";
        taskItem.style.textDecoration = "none";
    }

    // Change style of task onclick
    img.addEventListener('click', () => {
        if (task.complete === false) {
            img.classList.value = "checked-btn clickable";
            img.parentNode.parentNode.style.textDecoration = "line-through";
            task.complete = true;
        } 
        else {
            img.classList.value = "unchecked-btn clickable";
            img.parentNode.parentNode.style.textDecoration = "none";
            task.complete = false;
        }
    });

    listCheckmark.appendChild(img);
    taskItem.appendChild(listCheckmark);
    div1.appendChild(taskName);
    div1.appendChild(taskUrgent);
    div1.appendChild(dropDown);
    div2.appendChild(date);
    contentHeader.appendChild(div1);
    contentHeader.appendChild(div2);
    contentHeader.appendChild(dropDown);
    listContent.appendChild(contentHeader);
    listBody.appendChild(description);
    listContent.appendChild(listBody);
    taskItem.appendChild(listContent);
    li.appendChild(taskItem);
    ul.appendChild(li);
}

// Get buttons
const inboxBtn = document.querySelector('#inbox');
const todayBtn = document.querySelector('#today');
const upcomingBtn = document.querySelector('#upcoming');
const projectsBtn = document.querySelector('#projects');
const addTaskBtn = document.querySelector('#addTask');
const addProjectBtn = document.querySelector('#addProject');

// Handle submit form
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault(); // prevent load

    // Add task, clear form value
    addTask();
    document.querySelector('#task-name').value = "";
    document.querySelector('#task-description').value = "";
    document.querySelector('#task-date').value = "";
    document.querySelector('#task-urgent').checked = false;
    document.querySelector('.add-task-form').style.display = 'none';
    return false;
});

// Handle display of submit form
addTaskBtn.addEventListener('click', () => {
    const form = document.querySelector('.add-task-form');
    if ((form.style.display === 'none') || (!form.style.display)) {
        form.style.display = 'block';
        setTimeout(() => {
            form.style.opacity = 1;
        }, 0);
    }
    else {
        form.style.opacity = 0;
        setTimeout(() => {
            form.style.display = 'none';    
        }, 400);
    }

    // Add projects from array to select
    const projectSelect = document.querySelector('#project-select');
    projectSelect.innerHTML = "";
    projectSelect.classList.add('col-auto', 'my-1');
    const selectLabel = document.createElement('label');
    const select = document.createElement('select');
    const optionDefault = document.createElement('option');
    selectLabel.setAttribute('class', 'mr-sm-2');
    selectLabel.setAttribute('for', 'projectSelect');
    selectLabel.innerHTML = "Project";
    select.setAttribute('id', 'projectSelect');
    select.classList.add('custom-select', 'mr-sm-2');
    optionDefault.setAttribute('selected', true);
    optionDefault.innerHTML = "No project";

    select.appendChild(optionDefault);

    for (let i = 0; i < myProjects.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', myProjects[i]);
        option.innerHTML = myProjects[i];
        select.appendChild(option);
    }
    projectSelect.append(selectLabel);
    projectSelect.append(select);
});

// Display inbox
inboxBtn.addEventListener('click', () => {
    document.querySelector('#listUl').innerHTML = "";
    document.querySelector('.add-task-form').style.display = 'none';
    document.querySelector('#inbox-view').style.display = 'block';
    document.querySelector('#today-view').style.display = 'none';
    document.querySelector('#upcoming-view').style.display = 'none';
    document.querySelector('#projects-view').style.display = 'none';
    for (let i = 0; i < myTasks.length; i++) {
        createTaskLi(myTasks[i], '#listUl');
    }
})

// Display today tasks
todayBtn.addEventListener('click', () => {
    document.querySelector('#listTodayUl').innerHTML = "";
    document.querySelector('#inbox-view').style.display = 'none';
    document.querySelector('#today-view').style.display = 'block';
    document.querySelector('#upcoming-view').style.display = 'none';
    document.querySelector('#projects-view').style.display = 'none';

    // Check if task date === todays date
    let todayDate = new Date();
    todayDate = format(todayDate, 'yyyy-MM-dd')
    for (let i = 0; i < myTasks.length; i++) {
        if (myTasks[i].date === todayDate) {
            createTaskLi(myTasks[i], '#listTodayUl');
        };
    }
})

// Display upcoming tasks
upcomingBtn.addEventListener('click', () => {
    document.querySelector('#listUpcomingUl').innerHTML = "";
    document.querySelector('#inbox-view').style.display = 'none';
    document.querySelector('#today-view').style.display = 'none';
    document.querySelector('#upcoming-view').style.display = 'block';
    document.querySelector('#projects-view').style.display = 'none';

    // Check if task date > todays date
    let todayDate = new Date();
    todayDate = format(todayDate, 'yyyy-MM-dd')
    for (let i = 0; i < myTasks.length; i++) {
        if (myTasks[i].date > todayDate) {
            createTaskLi(myTasks[i], '#listUpcomingUl');
        };
    }
})

// Display projects
projectsBtn.addEventListener('click', () => {
    document.querySelector('#inbox-view').style.display = 'none';
    document.querySelector('#today-view').style.display = 'none';
    document.querySelector('#upcoming-view').style.display = 'none';
    document.querySelector('#projects-view').style.display = 'block';


    // Check if task in project
    for (let j = 0; j < myProjects.length; j++) {
        const projectList = document.querySelector(`#project-${myProjects[j].replace(/\s+/g, '-')}`);
        if (projectList) {
            projectList.innerHTML = "";
        }
        for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].project === myProjects[j]) {
                createTaskLi(myTasks[i], `#project-${myProjects[j].replace(/\s+/g, '-')}`);
            }
        }
    }

})

// Adds projects and tasks for specific projects
function addProject() {
    const div = document.createElement('div');
    div.setAttribute('class', 'project-header')
    const projectName = document.querySelector('#project-name').value;
    const projectsTasks = document.querySelector('.projects-tasks');
    const projectTitle = document.createElement('h2');

    // create dropDown delete element
    const dropDown = document.createElement("div");
    dropDown.classList.add("dropdown");
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("btn", "btn-sm", "btn-outline-primary", "dropdown-toggle");
    toggleBtn.type = "button";
    toggleBtn.setAttribute("data-bs-toggle", "dropdown");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.textContent = "Delete";
    const dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("dropdown-menu");

    const dropdownMenuItem = document.createElement("li");
    const dropdownMenuItemLink = document.createElement("a");
    dropdownMenuItemLink.classList.add("dropdown-item");
    dropdownMenuItemLink.href = "#";
    dropdownMenuItemLink.textContent = "Delete Project";
    dropdownMenuItem.appendChild(dropdownMenuItemLink);
    dropdownMenu.appendChild(dropdownMenuItem);

    dropDown.appendChild(toggleBtn);
    dropDown.appendChild(dropdownMenu);

    // Add event listener for delete
    dropdownMenuItemLink.addEventListener('click', () => {
        ul.remove();
        div.remove();
        for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].project === projectName) {
                myTasks[i].project = "No project";
            }
        }
    });

    projectTitle.setAttribute('class', 'h2 project-' + projectName.replace(/\s+/g, '-'));
    projectTitle.classList.add('mt-3');
    projectTitle.innerHTML = projectName;
    myProjects.push(projectName);
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group');
    ul.setAttribute('id', 'project-' + projectName.replace(/\s+/g, '-'))
    div.appendChild(projectTitle);
    div.appendChild(dropDown);
    projectsTasks.appendChild(div);
    projectsTasks.appendChild(ul);
};

// Handle project submit form
document.querySelector('#formProject').addEventListener('submit', (event) => {
    event.preventDefault(); // prevent load

    // Add task, clear form value
    addProject();
    document.querySelector('#project-name').value = "";
    document.querySelector('.add-project-form').style.display = 'none';
    return false;
});

// Handle display of project-submit form
addProjectBtn.addEventListener('click', () => {
    const form = document.querySelector('.add-project-form');
    if ((form.style.display === 'none') || (!form.style.display)) {
        form.style.display = 'block';
        setTimeout(() => {
            form.style.opacity = 1;
        }, 0);
    }
    else {
        form.style.opacity = 0;
        setTimeout(() => {
            form.style.display = 'none';    
        }, 400);
    }
});





