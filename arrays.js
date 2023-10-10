/* eslint-disable no-console, prefer-rest-params, no-shadow, no-inner-declarations, max-len, prefer-destructuring, no-array-constructor,no-unused-vars, no-debugger, no-unused-expressions */
const topicId = 1;

// 1. Overview: array data type, Array prototype.
if (topicId === 1) {
  const arr = ['apple', 'banana', 'orange'];
  let view = typeof arr; // 'object'
  view = Array === global.Array; // true
  const arr2 = new Array('cherry', 'watermelon', 'peach');
  const arr3 = Array('mango', 'tangerine', 'pomegranate');

  view = [] instanceof Array; // returns true
  view = [].constructor === Array; // returns true
  view = Object.getPrototypeOf([]) === Array.prototype;
  view = Object.getPrototypeOf(arr); // Array.prototype
  view = Object.getOwnPropertyNames(Array);
  view = Object.getOwnPropertyNames(Array.prototype);
  debugger;
}

// 2. Create an array instance.
if (topicId === 2) {
  // Array literal
  const arr = ['apple', 'banana', 'orange'];
  // Array constructor function
  const arr2 = new Array('cherry', 'watermelon', 'peach');
  // Array function
  const arr3 = Array('mango', 'tangerine', 'pomegranate');
  // Array.of()
  const arr4 = Array.of('strawberry', 'blueberry', 'rasberry');
  debugger;
}

// 3. Get and Set Array Elements.
if (topicId === 3) {
  const arr = ['apple', 'banana', 'orange'];
  let view = arr[0];
  view = arr[arr.length - 1];
  arr[1] = 'blackberry';
  view = arr[1];
  debugger;
}

// 4. Static properties and methods.
if (topicId === 4) {
  const staticProperties = Object.getOwnPropertyNames(Array); // returns length, name, prototype, isArray, from, of

  const arr = Array.of('apple', 'orange', 'banana');
  const view = Array.isArray(arr); // true
  // Array.from() See Shallow copy topic
  debugger;
}

// 5. Instance properties.
if (topicId === 5) {
  const instanceProperties = Object.getOwnPropertyNames(Array.prototype); // Returns: length, constructor, concat, copyWithin, fill, find, findIndex, lastIndexOf, pop, push, reverse, shift, unshift, slice, sort, splice, includes, indexOf, join, keys, entries, values, forEach, filter, flat, flatMap, map, every, some, reduce, reduceRight, toLocaleString, toString, at, findLast, findLastIndex

  const arr = ['apple', 'banana', 'orange'];

  let view = arr.constructor; // returns Array
  view = arr.length; // 3
  arr.length = 5; // arr is now ['apple', 'banana', 'orange',,,]
  arr.length = 2; // arr is now ['apple', 'banana']
  debugger;
}

// 6a. Instance methods: modify array: Add/remove elements at start/end of array.
if (topicId === '6a') {
  const arr = ['a', 'b', 'c'];
  // remove elem from beginning of array
  let elem = arr.shift(); // ['b', 'c']
  elem; // 'a'
  // add element to beginning of array
  arr.unshift(1); // [1, 'b', 'c']
  // remove element from end of array
  elem = arr.pop(); // [1, 'b']
  elem; // 'c'
  // add element from end of array
  arr.push(3); // [1, 'b', 3']
  debugger;
}

// 6b. Instance methods: modify array: Add/change/remove elements in middle of array
if (topicId === '6b') {
  let arr = ['a', 'b', 'c', 'd', 'e'];
  // Change value of element at index 2 to capital letter "C"
  arr[2] = 'C'; // ['a', 'b', 'C', 'd', 'e']
  // Find index of element 'd', then change it to 'D'
  const i = arr.indexOf('d'); // i is set to index 3
  arr[i] = 'D';
  debugger;

  // Remove items from array
  // Remove item at index 3
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr.splice(3, 1); // arr is now ['a','b','c','e']

  // Remove item at index 3 and put it in arr2
  arr = ['a', 'b', 'c', 'd', 'e'];
  let arr2 = arr.splice(3, 1); // arr ['a','b','c','e']; arr2 

  // Remove items starting at index 3
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr2 = arr.splice(3); // arr ['a','b','c']; arr2 ['d','e'];

  // Remove items starting 2 elements before the end
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr2 = arr.splice(-2); // arr ['a','b','c']; arr2 ['d','e'];

  // Replace items in array
  // Replace 2 items starting at index 1 with 'B','C'
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr2 = arr.splice(1, 2, 'B', 'C'); // arr ['a','B','C','d','e']; arr2 ['b','c'];
  // Replace 3 items starting at index 1 with 'C'
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr2 = arr.splice(1, 3, 'C'); // arr ['a','C','e']; arr2 ['b','c','d'];
  // Replace the item at index 2 and replace with three items
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr2 = arr.splice(2, 1, 'c1', 'c2', 'c3'); // arr ['a','b','c1,'c2','c3','d','e']; arr2 ['c'];

  // Add items to array, no removals or replacements
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr.splice(3, 0, 'c2'); // arr ['a','b','c','c2','d','e']
  debugger;
}

// 6c. Array of objects: add, update, and remove elems.
if (topicId === '6c') {
  // Array of objects: add, update, and remove elems
  const users = [{ id: 1, name: 'Joey' }, { id: 2, name: 'Sheena' }, { id: 3, name: 'Johnny' }];
  const i = users.findIndex((user) => user.id === 1); // returns index 0
  // Add user object to end of the users array.
  const user4 = { id: 4, name: 'Judy' };
  users.push(user4);
  // Update user at index i, you can replace the whole object. Or change the name property of element at index i.
  users[i].name = 'Joseph';
  // Remove user object at index i.
  users.splice(i, 1);
  debugger;
}

// 6d. Instance methods: modify array: sort.
if (topicId === '6d') {
  // Default compare
  let arr = ['cat', 'eel', 'ant', 'bee', 'dog'];
  arr.sort(); // ['ant', 'bee', 'cat', 'dog', 'eel']

  // Numbers 0-9 come first, then uppercase letters, then lower case letters.
  // Numbers are treated as individual characters so the character 1 in 10 comes before 9.
  arr = ['ant', 'Bird', 'cat', 9, 10];
  arr.sort(); // [10, 9, 'Bird', 'ant', 'cat']

  // Sort numbers.
  // In ascending order:
  arr = [7, -3, 21, 0];
  arr.sort((a, b) => a - b); // [-3, 0, 7, 21]
  // In decending order:
  arr = [7, -3, 21, 0];
  arr.sort((a, b) => b - a); // [21, 7, 0, -3]

  // Sort Strings Case Insensitive:
  // Sort strings case insensitive in ascending order:
  arr = ['cat', 'Eel', 'ant', 'Bee', 'dog'];
  arr.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })); // ['ant', 'Bee', 'cat', 'dog', 'Eel']
  // Sort strings case insensitive in descending order:
  arr = ['cat', 'Eel', 'ant', 'Bee', 'dog'];
  arr.sort((a, b) => b.localeCompare(a, 'en', { sensitivity: 'base' })); // ['Eel', 'dog', 'cat', 'Bee', 'ant']

  // Sort array of objects:
  const users = [{ name: 'Joey', age: 31 }, { name: 'Sheena', age: 22 }, { name: 'DeeDee', age: 19 }];
  // Sort numeric property
  users.sort((a, b) => a.age - b.age);
  // Sort string property case insensitive.
  users.sort((a, b) => a.name - b.name);
  // Sort string property case sensitive.
  users.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
  debugger;
}

// 6e. Instance methods: modify array: Other mutator methods.
if (topicId === '6e') {
  let arr = ['a', 'b', 'c'];
  // Reverse the order of the array elements.
  arr.reverse(); // ['c','b','a']

  // Fill all or part of the array with one element.
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr.fill('-'); // ["-", "-", "-", "-", "-"]; Without a start and end index it changes all elements.
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr.fill('-', 2); // ["a", "b", "-", "-", "-"]; Without an end index it changes all elements from the start index to the end.
  arr = ['a', 'b', 'c', 'd', 'e'];
  arr.fill('-', 1, 3); // ["a", "-", "-", "d", "e"]; Starts on the start index. Ends just before the end index.

  // copyWithin to copy one or more elements in an array, pasting them in the same array.
  arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  // Copy elements starting at index 2 ending just before index 4 (i.e., 'c' and 'd') to the targetIndex 0.
  arr.copyWithin(0, 2, 4); // ["c", "d", "c", "d", "e", "f", "g"];
  // Copies elements starting at index 0, ending just before index 2 (i.e., 'a' and 'b') to targetIndex 4.
  arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  arr.copyWithin(4, 0, 2); // ["a", "b", "c", "d", "a", "b", "g"];
  debugger;
}

// 7. Instance methods: Accessor Methods (Returns representation of an array. Does not modify array)
if (topicId === 7) {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  // Return extracted array from beginIndex to the element before endIndex without changing the original.
  // Copy two elems starting at index 1 (so ending before index 3).
  let arr2 = arr.slice(1, 3); // ['b','c']
  // Copy all elems from index 2 on. Leave out endIndex to copy the remaining elems.
  arr2 = arr.slice(2); // ['c','d','e']
  // Copy last 2 elems. Negative numbers start backward from end of array.
  arr2 = arr.slice(-2); // ['d','e']
  // Shallow copy: Copy all the elems by leaving out the args.
  arr2 = arr.slice(); // ['a','b','c','d','e']
  // IndexOf() finds the index of the elem. Find element with value 'c' and copy it to arr2.
  const i = arr.indexOf('c'); // 2
  arr2 = arr.slice(i); // ['c','d','e']

  arr2 = arr.concat('F', 'G'); // ['a','b','c','d','e','F','G']
  // Convert array to String
  arr2 = arr.toString(); // "a,b,c,d,e"
  arr2 = arr.join(); // "a,b,c,d,e"
  arr2 = arr.join(', '); // "a, b, c, d, e"
  arr2 = arr.join('-'); // "a-b-c-d-e"
  arr2 = arr.join(' '); // "a b c d e"
  arr2 = arr.join(''); // "abcde"
  debugger;
}

// 8. Instance methods: Search methods
if (topicId === 8) {
  const names = ['Joey', 'Sheena', 'Johnny', 'Joey', 'DeeDee'];
  const ages = [20, 16, 19, 24, 26, 19];
  const users = [{ name: 'Joey', age: 18 }, { name: 'Sheena', age: 27 }, { name: 'Johnny', age: 26 }];

  let view = names.indexOf('Joey'); // 0
  view = names.lastIndexOf('Joey'); // 3

  view = ages.findIndex((age) => age >= 21); // 3
  view = ages.includes(26); // true
  view = ages.some((age) => age >= 21); // true
  view = ages.every((elem) => typeof elem === 'number'); // true
  view = ages.find((age) => age >= 21); // 24

  view = users.find((user) => user.age >= 21); // {name: 'Sheena', age: 27}

  view = ages.filter((age) => age >= 21); // returns [24, 26]
  // Array of objects: Return array of all users age 21 and over
  view = users.filter((user) => user.age >= 21); // [{name: 'Sheena', age: 27}, {name: 'Johnny', age: 26}]
  debugger;
}

// 9. Instance methods: Iteration Methods
if (topicId === 9) {
  let arr = ['a', 'b', 'c', 'd', 'e'];
  // Simple example:
  // Iterate through each element in an array. The callback function logs the element value to the console.
  arr.forEach((elem) => {
    console.log(elem);
  });
  // As a one liner:
  arr.forEach((elem) => console.log(elem));
  // Optional index argument:
  arr.forEach((elem, i) => {
    console.log(`${i}: ${elem}`);
  });
  // Logs each index and element starting with 0: a

  // Build a string of each item separated by commas.
  // Last item is preceded by "and" and ends in a period.
  let str = '';
  arr.forEach((elem, i) => {
    if (i < arr.length - 1) {
      str += `${elem}, `;
    } else {
      str += `and ${elem}.`;
    }
  });
  console.log(str); // a, b, c, d, and e.

  // Map
  let arr2 = arr.map((item) => item.toUpperCase());
  console.log(arr2); // ['A','B','C','D','E']

  arr2 = arr.map((item, i) => {
    if (i > 0) return item.toUpperCase();
    return item;
  });
  console.log(arr2); // ['a','B','C','D','E']

  // To change the original array:
  arr = arr.map((item) => item.toUpperCase());
  console.log(arr); // ['A','B','C','D','E']

  // Reduce
  arr = [1, 2, 3, 4, 5];
  const res = arr.reduce((prevVal, currVal) => prevVal + currVal);
  console.log(res); // 15
  debugger;
}

// 10. Shallow copy
if (topicId === 10) {
  const arr = ['a', 'b', 'c'];
  // Spread Operator (ES2015)
  let arr2 = [...arr]; // arr2 ['a','b','c']

  const view = (arr === arr2); // returns false.

  // slice full array
  arr2 = arr.slice(); // arr2 ['a','b','c']
  // Array.from
  arr2 = Array.from(arr); // arr2 ['a','b','c']

  // Add: Shallow copy arr and add element 'f'.
  arr2 = [...arr, 'd']; // arr2 ['a', 'b', 'c', 'd'];
  // Update: Shallow copy arr and change elem 'c' to 'X'.
  arr2 = arr.map((elem) => (elem === 'c' ? 'X' : elem)); // arr2 is ['a', 'b', 'X'];
  // Remove: Shallow copy arr and remove elem 'b'.
  arr2 = arr.filter((item) => item !== 'b'); // arr2 ['a', 'c'];

  // Shallow copy array of objects and add, update, or remove elems
  let users = [{ id: 1, name: 'Joey' }, { id: 2, name: 'Sheena' }, { id: 3, name: 'Johnny' }];
  // Add: Shallow copy users and add object judy.Reassign users to the result.
  const judy = { id: 4, name: 'Judy' };
  users = [...users, judy];
  // Update user with id 1, replacing it with the below. Reassign users to the result.
  const user1 = { id: 1, name: 'Joseph' };
  users = users.map((user) => (user.id === 1 ? user1 : user));
  // Remove user with id 2. Reassign users to the result.
  users = users.filter((user) => user.id !== 2);
  debugger;
}

// 11. Array-like and Iterable Objects, including Sets.
if (topicId === 11) {
  const str = 'hello';
  // strings have the length property
  let view = str.length; // 5
  // Characters can be accessed by their index number
  view = str[0]; // 'h'
  view = Array.isArray(str); // false
  // Strings can be converted to arrays using the spread operator
  let strArr = [...str]; // ['h','e','l','l','o']
  // Strings can also be converted to arrays using Array.from()
  strArr = Array.from(str); // ['h','e','l','l','o']

  // Function declarations (but not arrow functions) have an arguments object.
  function myFunc(param1, param2, param3) {
    let view = arguments;
    view = arguments.length; // 3
    view = arguments[0]; // 'a'
    view = Array.isArray(arguments); // false
    const argsArr = [...arguments]; // ['a','b','c']
  }
  myFunc('a', 'b', 'c');

  const mySet = new Set(['a', 'a', 'c', 'd', 'e', 'd']); // Remove dups.
  view = mySet.size; // 4
  view = Array.isArray(mySet); // false
  // Convert set to array.
  const setArr = [...mySet]; // ['a','c','d','e']
  debugger;
}
