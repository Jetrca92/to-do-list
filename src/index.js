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
    img.setAttribute('src', '../src/images/check.png');
    img.setAttribute('alt', 'check icon');
    listContent.setAttribute('class', 'list-content');
    contentHeader.classList.add('d-flex', 'justify-content-between');
    taskName.setAttribute('class', 'me-3');
    listBody.setAttribute('class', 'list-body');
    description.classList.add('d-flex', 'flex-wrap');

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
});

// Display inbox
inboxBtn.addEventListener('click', () => {
    document.querySelector('#listUl').innerHTML = "";
    document.querySelector('#inbox-view').style.display = 'block';
    document.querySelector('#today-view').style.display = 'none';
    document.querySelector('#upcoming-view').style.display = 'none';
    document.querySelector('#projects-view').style.display = 'none';
    //myTasks.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date))); //sort tasks by date asc
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

    //task.date format 2023-03-06
})

// Display upcoming tasks
upcomingBtn.addEventListener('click', () => {
    document.querySelector('#inbox-view').style.display = 'none';
    document.querySelector('#today-view').style.display = 'none';
    document.querySelector('#upcoming-view').style.display = 'block';
    document.querySelector('#projects-view').style.display = 'none';
})

// Display projects
projectsBtn.addEventListener('click', () => {
    document.querySelector('#inbox-view').style.display = 'none';
    document.querySelector('#today-view').style.display = 'none';
    document.querySelector('#upcoming-view').style.display = 'none';
    document.querySelector('#projects-view').style.display = 'block';
})



