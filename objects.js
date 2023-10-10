/* eslint-disable no-unused-vars, no-new-object, max-len, no-debugger */

let topic = '1. Create an object literal.';
const author = {
  name: 'Joey R',
  age: 34,
  active: true,
  books: ['Learn JavaScript', 'Learn Node.js', 'Learn Express'],
};
let view = typeof author;
debugger;
// Object is a built-in constructor function attached to the global object. Instantiate a new object by calling it with the new operator, passing in its properties.
topic = '2. Create an object with Object constructor function';
view = Object;
debugger;

const book = new Object({
  title: 'Learn JavaScript',
  author: author,
  price: 39.99,
});

// You can leave out the "new" keyword and it works the same.
const book2 = Object({
  title: 'Learn Node.js',
  // Property value shorthand you don't have to use key: value when property name and value are the same.
  author,
  price: 24.95,
});
debugger;

// Get property values
topic = '3. Properties';
// Get property values: dot or bracket notation
view = book.title;
view = book2['title'];
// Computed property name
const prop = 'price';
view = book[prop];
// Change property value
book.price = 44.95;
// Set new properties
book.category = 'Software';
// Delete property
delete book.category;
debugger;

// Optional chaining (ES2020) - Return undefined instead of error if parent property is null or undefined.
view = book.author?.name;
view = book.author?.cat;
debugger;

// Methods
topic = '4&5. Methods and This';
if (true) {
  const author2 = {
    name: 'Sheena',
    age: 27,
    addYear: function() { this.age += 1; },
    // log: function() { return `${this.name} is ${this.age} years old.` },
    // Shorthand syntax
    log() { return `${this.name} is ${this.age} years old.` },
  };
  debugger;
  // This represents the current object.
  // For a method to access a property in the object you need to chain it to "this".
  author2.addYear();
  view = author2.log();
  debugger;
}

// Spread Operator
topic = '6. Spread operator: shallow copy all or part of obj';
if (true) {
  // To reassign variable to different object, use let.
  const bookCopy = book;
  let isEqual = book === bookCopy;
  debugger;
  const shallowCopy = { ...book };
  isEqual = book === shallowCopy; // These are different objects.
  bookCopy.price = 42.95;
  debugger;
  // Shallow copy then modify properties.
  const book3 = { ...book, title: 'Learn Express'};  
  debugger;
}

// Object built-in global object: static methods - get info
topic = '7. Object built-in global object: static methods - get info';
// Object is a built-in object attached to the global object.
if (window) {
  view = window.Object === Object;
} else {
  view = global.Object === Object;
}

view = Object; // Object is a JS built-in global object. It is a constructor function. Functions are objects. It has static methods as well as a prototype property with instance methods. 
view = Object.getOwnPropertyNames(author);
view = Object.keys(author);
view = Object.values(author);
view = Object.entries(author);
debugger;

// Prevent objects from being modified
topic = '8. Object built-in global object: static methods - prevent changes';
if (true) {
  const book4 = { title: 'Learn Unix', author };
  book4.available = true;
  debugger;
  // Freeze an object. Other code cannot add/delete or modify its properties or their values.
  Object.freeze(book4);
  //  Determine if an object was frozen. Returns true/false.
  view = Object.isFrozen(book4); 
  book4.price = 29.99;
  book4.available = false;
  debugger;

  const book5 = { title: 'Learn Sql', available: true, author };
  debugger;
  Object.seal(book5);
  view = Object.isSealed(book5); 
  book5.price = 29.99;
  book5.available = false;
  debugger;
}
