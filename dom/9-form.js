/* eslint-disable no-console */
const form = document.getElementById('form');
const task = document.getElementById('task');
const due = document.getElementById('due');
const done = document.getElementById('done');
const details = document.getElementById('details');
const category = document.getElementById('category');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Put the form data in an object.
  const data = {
    task: task.value,
    due: due.value,
    done: done.checked,
    details: details.value,
    category: category.value,
  };

  // Convert the JavaScript object to a JSON string
  const jsonData = JSON.stringify(data);

  // Send the JSON string to the server (a free fake api)
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: jsonData,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  // Clear the form fields.
  task.value = '';
  due.value = '';
  done.checked = false;
  details.value = '';
  category.value = '';
});
