// Array for storing tasks
let myTasks = [];

// Tasks class
class Task {
    constructor(name, description, date, urgent) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.urgent = urgent;
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
    //add function to add new task to display
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


