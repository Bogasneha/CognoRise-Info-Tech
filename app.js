const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const tasksContainer = document.getElementById('tasks-container');

let tasks = [];

// Function to render tasks
function renderTasks() {
    tasksContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTaskCompletion(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        tasksContainer.appendChild(taskElement);
    });
}

// Function to add a new task
function addTask(text) {
    const newTask = {
        text,
        completed: false
    };
    tasks.push(newTask);
    renderTasks();
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const newText = prompt('Enter new task text:');
    if (newText !== null) {
        tasks[index].text = newText;
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listener for form submission
taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
});

// Initial rendering of tasks
renderTasks();
