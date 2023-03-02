// Get buttons
const inboxBtn = document.querySelector('#inbox');
const todayBtn = document.querySelector('#today');
const upcomingBtn = document.querySelector('#upcoming');
const projectsBtn = document.querySelector('#projects');
const addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener('click', () => {
    const form = document.querySelector('#addTaskForm');
    form.style.display = 'block';
});
