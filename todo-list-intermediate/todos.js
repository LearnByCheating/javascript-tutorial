/* eslint-disable import/extensions, no-alert, no-restricted-globals, no-console, prefer-destructuring, max-len */
import seedTodos from './seed-todos.js';

const addForm = document.getElementById('add-form');
const task = document.getElementById('task');
const due = document.getElementById('due');
const details = document.getElementById('details');
const seedBtn = document.getElementById('seed-btn');
const clearAllBtn = document.getElementById('clearAll-btn');
const addBtn = document.getElementById('add-btn');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const list = document.getElementById('list');

try {
  if (!navigator.onLine) {
    throw new Error('No Connection. Bootstrap and Bootstrap icon CDNs require an internet connection.');
  }
} catch (err) {
  const errMsgElem = document.createElement('li');
  errMsgElem.classList.add('list-group-item', 'bg-danger', 'px-3');
  errMsgElem.textContent = err.toString();
  list.insertAdjacentElement('beforebegin', errMsgElem);
}

const createLi = (todo, showDetails = false) => {
  const listItem = `<input type="checkbox" data-done class="form-check-input"${todo.done ? ' checked' : ''}/>
    <strong${todo.done ? ' class="text-decoration-line-through"' : ''}>${todo.task}</strong>
    <i data-remove class="bi bi-x-circle-fill text-danger float-end" role="button"></i>
    <i data-edit class="bi bi-pencil-square float-end mx-1 text-dark" role="button"></i>
    <i data-details class="bi bi-info-circle-fill text-dark float-end ms-2" role="button"></i>
    <span class="float-end align-bottom">${todo.due ? `Due: ${new Date(todo.due).toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' })}` : ''}</span>
    <p id="details-${todo.id}" class="mb-0${showDetails ? '' : ' d-none'}">${todo.details}</p>`;
  return listItem;
};

let highestId = 0;
// Get todos from storage and display
const getTodos = () => {
  let todos = { ...localStorage };
  todos = Object.values(todos);
  if (todos.length > 0) {
    todos = todos.map((todo) => JSON.parse(todo));
    todos.sort((a, b) => a.id - b.id);
    // Alternatively, sort by two properties: done then id.
    // todos.sort((a, b) => Number(a.done) - Number(b.done) || b.id - a.id);
    highestId = todos[todos.length - 1].id;
    let listItems = '';
    todos.forEach((todo) => {
      listItems += `<li id="${todo.id}" class="list-group-item">${createLi(todo)}</li>`;
    });
    list.innerHTML = listItems;
  } else {
    seedBtn.classList.remove('d-none');
  }
};
getTodos();

// Seed To Dos.
seedBtn.addEventListener('click', () => {
  seedTodos.forEach((todo) => {
    localStorage.setItem(todo.id, JSON.stringify(todo));
  });
  getTodos();
  seedBtn.classList.add('d-none');
});

// Display form.
addBtn.addEventListener('click', () => {
  addForm.classList.remove('d-none');
});

// Hide form.
cancelBtn.addEventListener('click', () => {
  task.value = '';
  due.value = '';
  details.value = '';
  addForm.classList.add('d-none');
});

class Todo {
  constructor(task, due, details) {
    this.id = highestId + (++Todo.count);
    this.task = task;
    this.due = due;
    this.details = details;
    this.done = false;
  }

  static count = 0;
}

// Handle Add Todo form submission.
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const taskVal = task.value.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const detailsVal = details.value.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const newTodo = new Todo(taskVal, due.value, detailsVal);
  const newTodoJson = JSON.stringify(newTodo);
  localStorage.setItem(newTodo.id.toString(), newTodoJson);
  const newLi = document.createElement('li');
  newLi.id = newTodo.id;
  newLi.classList.add('list-group-item');
  newLi.innerHTML = createLi(newTodo);
  list.append(newLi);
  task.value = '';
  due.value = '';
  details.value = '';
  addForm.classList.add('d-none');
  if (!seedBtn.classList.contains('d-none')) {
    seedBtn.classList.add('d-none');
  }
});

// Edit a ToDo Item
const createEdit = (todo) => {
  const editForm = `<div class="form-floating mb-2">
    <input type="text" id="task-${todo.id}" class="form-control mb-2" value="${todo.task}">
    <label for="task">Task:</label>
  </div>
  <div class="form-floating mb-2">
    <input type="date" id="due-${todo.id}" class="form-control mb-2" value="${todo.due.substring(0, 10)}">
    <label for="Due">Due:</label>
  </div>
  <div class="form-floating mb-2">
    <textarea id="details-${todo.id}" class="form-control" style="height: 80px">${todo.details}</textarea>
    <label for="details">Details:</label>
  </div>
  <button data-edit-submit class="btn btn-sm btn-outline-light col-md-2">Save Edit</button>
  <button data-edit-cancel class="btn btn-sm btn-outline-light col-md-2 float-end">Cancel</button>`;
  return editForm;
};

// Handle clicks on todo items.
list.addEventListener('click', (e) => {
  const li = e.target.parentElement;
  const { id } = li;

  // Handle Done
  if (e.target.hasAttribute('data-done')) {
    const todo = JSON.parse(localStorage.getItem(id));
    const isDone = e.target.checked;
    if (isDone) {
      todo.done = true;
      localStorage.setItem(id, JSON.stringify(todo));
      e.target.nextElementSibling.classList.add('text-decoration-line-through');
    } else {
      todo.done = false;
      localStorage.setItem(id, JSON.stringify(todo));
      e.target.nextElementSibling.classList.remove('text-decoration-line-through');
    }

  // Handle toggle details
  } else if (e.target.hasAttribute('data-details')) {
    const todoDetails = document.getElementById(`details-${id}`);
    if (todoDetails.classList.contains('d-none')) {
      todoDetails.classList.remove('d-none');
    } else {
      todoDetails.classList.add('d-none');
    }

  // Handle Edit
  } else if (e.target.hasAttribute('data-edit')) {
    const todo = JSON.parse(localStorage.getItem(id));
    li.classList.add('bg-secondary');
    li.innerHTML = createEdit(todo);

  // Handle submit edit form
  } else if (e.target.hasAttribute('data-edit-submit')) {
    const todo = JSON.parse(localStorage.getItem(id));
    const editTask = document.getElementById(`task-${id}`);
    const editDue = document.getElementById(`due-${id}`);
    const editDetails = document.getElementById(`details-${id}`);
    todo.task = editTask.value.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    todo.due = editDue.value;
    todo.details = editDetails.value.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    localStorage.setItem(id, JSON.stringify(todo));
    li.classList.remove('bg-secondary');
    const showDetails = true;
    li.innerHTML = createLi(todo, showDetails);

  // Handle cancel edit form
  } else if (e.target.hasAttribute('data-edit-cancel')) {
    const todo = JSON.parse(localStorage.getItem(id));
    li.classList.remove('bg-secondary');
    const showDetails = true;
    li.innerHTML = createLi(todo, showDetails);

  // Handle remove todo
  } else if (e.target.hasAttribute('data-remove')) {
    localStorage.removeItem(id);
    e.target.parentElement.remove();
  }
});

// Remove all stored Todos
clearAllBtn.addEventListener('click', () => {
  if (confirm('Confirm remove all todos') === true) {
    localStorage.clear();
    list.innerHTML = '';
  }
  seedBtn.classList.remove('d-none');
});
