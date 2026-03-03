// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage on page load
window.onload = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => createTaskElement(task.text, task.completed));
};

// Add a new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    createTaskElement(taskText, false);
    saveTasks();
    taskInput.value = '';
  }
});

// Create task element and add to list
function createTaskElement(text, completed) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;
  if (completed) {
    span.classList.add('completed');
  }

  // Toggle completed state
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
    saveTasks();
  });

  // Edit task
  span.addEventListener('dblclick', () => {
    editTask(span);
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Save tasks to local storage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    const text = li.querySelector('span').textContent;
    const completed = li.querySelector('span').classList.contains('completed');
    tasks.push({ text, completed });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Edit task
function editTask(span) {
  const li = span.parentElement;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = span.textContent;
  input.classList.add('edit-mode');

  // Save edit on blur or Enter key
  input.addEventListener('blur', () => saveEdit(li, span, input));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveEdit(li, span, input);
    }
  });

  li.replaceChild(input, span);
  input.focus();
}

// Save the edited task
function saveEdit(li, span, input) {
  span.textContent = input.value.trim() || 'Untitled task';
  li.replaceChild(span, input);
  saveTasks();
}
