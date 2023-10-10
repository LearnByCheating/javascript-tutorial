/* eslint-disable no-unused-vars, no-debugger, no-console */
const topicId = 1;
let view;
let str;

// 1. Create a string.
if (topicId === 1) {
  console.log('This is a string literal.');
  str = 'This is a string variable';
  console.log(str);
  str = '\tString escape notation. Don\'t forget to escape apostophes.\nThen start a new line.';
  console.log(str);
  const myVar = 'interpolation';
  str = `Template strings allow ${myVar}.
And multiline strings.`;
  console.log(str);
  str = new String('String primitives are preferred, but strings can be created as objects');
  console.log(str);
  debugger;
}

// 2. String built-in global object.
if (topicId === 2) {
  str = 'this is a string primitive';
  // All the below are true:
  view = typeof str === 'string';
  view = !(str instanceof String);
  /*
    String is a built-in object.
    Acts as a wrapper used to represent and manipulate primitive strings.
    String.prototype holds string instance properties and methods.
  */
  view = Object.getPrototypeOf(str) === String.prototype;
  str = new String('This is a string object.');
  view = typeof str === 'object';
  view = str instanceof String;

  view = String;
  // Static method: CharCode are unicode character values.
  view = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100);
  // Instance props/methods are attached to the prototype object:
  view = String.prototype;
  debugger;
}

// 3. Modify strings
if (topicId === 3) {
  // String global obj: is a wrapper used to represent and manipulate primitive strings.
  str = 'Hello world';
  view = str.length;
  str.toUpperCase(); // Strings are immutable. You must reassign variable.
  str = str.toUpperCase(); // Reassign the variable to a new string.
  str = str.toLowerCase();
  str = str.padStart(13);
  str = str.trim();
  view = str.charAt(0);
  view = str.slice(1);
  str = str.charAt(0).toUpperCase() + str.slice(1);
  str = str.replace('world', 'planet'); // using substring
  str = str.replace(/planet/, 'world'); // using regexp
  view = '-'.repeat(100);
  view = 'Hello' + ' ' + 'World';
  view = 'Hello'.concat(' ', 'World');
  debugger;
}

// 4. Search/find methods
if (topicId === 4) {
  str = 'This sentence contains the word cat. Cat is capitalized in this sentence, plus category and catch contain it.';
  view = str.match(/Cat/);
  view = str.match(/Cat/ig).length; // Get the number of matches, case insensitive.
  const matches = [...str.matchAll(/Cat/ig)];
  matches.forEach((match) => console.log(match));
  view = str.indexOf('cat');
  view = str.lastIndexOf('cat');
  view = str.search(/Cat/);
  view = str.includes('category');
  view = str.startsWith('This');
  view = str.endsWith('not this');
  view = str.endsWith('it.');
  debugger;
}

// 5. Compare Strings
if (topicId === 5) {
  str = 'hello';
  // All the below are true
  view = str === 'hello';
  view = str !== 'Hello';
  view = str !== 'hello ';
  view = 'a' < 'z';
  // Characters compared by unicode decimal. Capital letters come before lower case letters.
  view = 'a' > 'Z';
  debugger;
}

// 6. Convert Data Types to/from String.
if (topicId === 6) {
  // Test if string. The below return true.
  view = typeof 'hello' === 'string';
  view = Object.getPrototypeOf('hello') === String.prototype;
  debugger;

  // Convert value to string primitive
  view = String(7);
  view = (7).toString();
  view = String(true);
  view = false.toString();
  view = String(['Joey', 'Sheena', 'Johnny']);
  view = ['Joey', 'Sheena', 'Johnny'].toString();
  view = String({ name: 'Joey', age: 32 });
  view = { name: 'Joey', age: 32 }.toString();
  view = String(new String('hello'));
  debugger;

  // Convert to/from array
  str = 'Joey, Sheena, Johnny,Judy';
  let arr = str.split(', ');
  arr = str.split(/, ?/); // You can use regexp for separator.
  view = arr.join(' | ');
  debugger;

  // Convert string to number
  view = Number('7');
  view = Number('19.95');
  debugger;
}
