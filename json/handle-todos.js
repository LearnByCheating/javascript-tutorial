/* eslint-disable */
// Read JSON file. Iterate over array and insert results on a web page.
import fileTodos from './todos.json' assert { type: 'json' };
const elemTodos = document.getElementById('todos');

let htmlTodos = '<ul>';
fileTodos.forEach((item) => {
  htmlTodos += `<li>${item.task}</li>`;
});
htmlTodos += '</ul>';

elemTodos.innerHTML = htmlTodos;
