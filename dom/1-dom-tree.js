/* eslint-disable no-unused-vars, no-console */

// Get element by it's id.
const heading = document.getElementById('heading');
// QuerySelector gets the first element with the selector.
const heading2 = document.querySelector('#heading');
const heading3 = document.querySelector('h1');
const heading4 = document.querySelector('.purple');
// Get elements by their tag names.
const listItems = document.getElementsByTagName('li');
const listItems2 = document.querySelectorAll('li');
// Get elements by their class names.
const listItems3 = document.getElementsByClassName('list-item');
const listItems4 = document.querySelectorAll('.list-item');

// All these headings are the same element.
console.log('heading', heading);
console.log('heading2', heading2);
console.log('heading3', heading3);
console.log('heading4', heading4);

// listItems and listItems 2-4 are the same elements
// The elems are put in an array-like object. Convert them to an array then iterate over them.
Array.from(listItems).forEach((listItem) => {
  console.log('list item:', listItem);
});
