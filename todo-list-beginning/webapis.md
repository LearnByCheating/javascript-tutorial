16a localStorage (vs sessionStorage)
console.log(`1 localStorage stores items as key-value pairs. 
Using the spread operator in an object literal will populate all the items in the object.
let todos = { ...localStorage };`);

Object.keys()

16b
console.log(`2 Iterate over all the todo items and store each in localStorage.
Use the todo id as the key. 
LocalStorage stores text not JavaScript objects, so convert each todo object to a JSON formatted string.

todos.forEach((todo) => {
  localStorage.setItem(todo.id, JSON.stringify(todo));
});`);

16c
const todo = new Todo(taskVal, due.value, detailsVal);
localStorage.setItem(todo.id.toString(), JSON.stringify(todo));
  console.log(`3 When a new item is created, store it in localStorage.
localStorage.setItem(todo.id.toString(), JSON.stringify(todo));`);

16d
console.log(`4 Get items from localStorage using it's key, in this case the todo's id.
Since the todo is stored as a JSON formatted string, it must be parsed back to a JavaScript object. 
const todo = JSON.parse(localStorage.getItem(id));`);

16e
console.log(`5 Remove individual items from localStorage identified by the key value, in this case by the todo id.
localStorage.removeItem(id);`);

16f
console.log(`6 Confirm is also a Web API. It displays a message with OK and Cancel butons.
localStorage.clear() removes all items stored in the domain's localStorage.
if (confirm('Confirm remove all todos') === true) {
  localStorage.clear();
  list.innerHTML = '';
}`);
