/* eslint-disable guard-for-in, no-restricted-syntax, no-console, no-debugger */

let topic;
debugger;

// For loop
topic = '1. For loop';
console.log('\n' + topic);
if (true) {
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
  debugger;

  // continue statement
  topic = '1b. Continue statement (for loop)';
  console.log('\n' + topic);
  for (let i = 1; i < 6; i++) {
    if (i === 4) continue;
    console.log(i);
  }
  debugger;

  // break statement
  topic = '1c. Break statement (for loop)';
  console.log('\n' + topic);
  for (let i = 1; i < 6; i++) {
    if (i === 4) break;
    console.log(i);
  }
  debugger;
}

// While loop
topic = '2. While loop';
console.log('\n' + topic);
if (true) {
  let i = 1;
  while (i < 6) {
    console.log(i);
    i++;
  }
  debugger;
}

// Do..while loop
topic = '3. Do..while loop';
console.log('\n' + topic);
if (true) {
  let i = 1;
  do {
    console.log(i++);
  } while (i < 6);
  debugger;
}

// For...Of Loop - Arrays
topic = '4. For...Of Loop - Iterate over arrays';
console.log('\n' + topic);
if (true) {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  for (const elem of arr) {
    console.log(elem);
  }
  debugger;

  topic = '4b. For..in loop alternative: arr.forEach()';
  console.log('\n' + topic);
  arr.forEach((elem) => {
    console.log(elem);
  });
  debugger;
}

// For...In Loop - Objects
topic = '5. For...In Loop - Iterate over object properties';
console.log('\n' + topic);
if (true) {
  const user = { name: 'Joey', gender: 'male', age: 30 };
  for (const prop in user) {
    console.log(`This user's ${prop} is ${user[prop]}.`);
  }
  debugger;
}
