import { compareAsc, format } from 'date-fns'

// Array for storing tasks
let myTasks = [];

// Tasks class
class Task {
    constructor(name, description, date, urgent) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.urgent = urgent;
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
    const task = new Task(name, description, date, urgent);
    myTasks.push(task);
    createTaskLi(task);
    //add function to add new task to display
}

// Display task in list
function createTaskLi(task) {
    const ul = document.querySelector('#listUl');

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
    img.setAttribute('src', '../src/images/check.png');
    img.setAttribute('alt', 'check icon');
    listContent.setAttribute('class', 'list-content');
    contentHeader.classList.add('d-flex', 'justify-content-between');
    taskName.setAttribute('class', 'me-3');
    listBody.setAttribute('class', 'list-body');
    description.classList.add('d-flex', 'flex-wrap');

    taskName.innerHTML = task.name;
    console.log(task.date);
    const taskDate = new Date(Date.parse(task.date));
    date.innerHTML = format(taskDate, 'MMM do yyyy');
    
    description.innerHTML = task.description;

    // Css for task urgent
    if (task.urgent) {
        taskUrgent.innerHTML = "(Urgent)";
    } else {
        taskUrgent.innerHTML = "(Not urgent)";
    }

    listCheckmark.appendChild(img);
    taskItem.appendChild(listCheckmark);
    div1.appendChild(taskName);
    div1.appendChild(taskUrgent);
    div2.appendChild(date);
    contentHeader.appendChild(div1);
    contentHeader.appendChild(div2);
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
});


