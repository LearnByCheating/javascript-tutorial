/* eslint-disable no-unused-vars, max-len, no-console, no-debugger */

// 1. Function declaration overview/parts
let topic = '1. function declarations';
function add(x, y) {
  const result = x + y;
  return result;
}
let res = add(5, 3);
debugger;

// 2. Hoisting
topic = '2. hoisting';
res = add1(10);
function add1(x) {
  const result = x + 1;
  return result;
}
debugger;

// 3. Global Scope
topic = '3. global scope';
window.add1;
res = window.add1(20);
debugger;

// 4. Function scope: functions declared in a function is not accessible
topic = '4. functions are function scoped';
function mathFunctions() { 
  function add2(x) { return x + 2; }
}

try {
  res = add2(10);
} catch (err) {
  console.log(err.toString());
  debugger;
}

// 5. Not block scoped: Function declared in a block is accessible.
topic = '5. Function scoped: Non-function blocks are accessible.';
if (true) {
  function add3(x) {
    const result = x + 3;
    return result;
  }
}
res = add3(10);
debugger;

// 6. Arrow function
topic = '6. Arrow function expressions';
const add4 = (x) => {
  const result = x + 4;
  return result;
};
res = add4(10);
debugger;

topic = '7. Single statement arrow functions';
// 7. Single statement arrow function
const add5 = (x) => x + 5;
res = add5(10);
debugger;

// 8. IIFE
topic = '8. Immediately invoking function expression';
res = (function (x) {
  const result = x + 6;
  return result;
}(10));

// 9. Object methods
topic = '9. Methods are functions that are properties of objects.';
const user = {
  name: 'Joey',
  age: 22,
  addYear: function() { this.age = this.age + 1; },
};
user.addYear();
debugger;

// 10. JavaScript Built in objects have methods.
topic = '10. JavaScript Built in Object methods.';
res = 'apply built-in string toUpperCase() method.';
res = res.toUpperCase();
debugger;

// 11. Parameters:
topic = '11. Parameters/arguments.';
// too many arguments - extras are ignored.
res = add5(10, 11, 12);
// not enough arguments - missing arg is "undefined"
res = add(10);
debugger;

// 12. Default parameters
topic = '12. Default parameters.';
function multiply(x, y = 1) {
  const result = x * y;
  return result;
}
res = multiply(10);
debugger;

// 13. Rest parameters
topic = '13. Rest parameters.';
const highScore = (name, ...scores) => {
  const sorted = scores.sort((a,b) => b - a);
  return `${name}'s highest score is ${sorted[0]}.`
};
res = highScore('Judy', 75, 82, 94, 72, 88);
debugger;

// 14. Variable scope
topic = '14. Variable scope.';
// functions can access variables declared in any up the chain. Includes global functions.
function add6(x) {
  const y = 6; // local variable
  res = x + y; // Assign value to variable in higher scope
  return; // returns undefined.
}
add6(10);
res = typeof y;
debugger;

// 15. Variable shadowing
topic = '15. Variable scope: shadowing.';
const num = 10;
function add7(x) {
  const num = 7; // Declare variable with same name in different scope. Does not change higher scope value.
  const result = num + x;
  return result;
}
res = add7(10);
debugger;

// 16. Arguments: primitives passed by value.
topic = '16. Args: primitive arguments passed by value.';
function add8(num) {
  num = num + 8; // parameter is treated as local variable. Does not change higher scope value.
  return num;
}
res = add8(num);
debugger;

// 17. Arguments: objects passed by reference.
topic = '17. Args: Object arguments passed by reference.';
function changeObj(obj) {
  obj.age = obj.age + 1;
  return obj;
}
res = changeObj(user);
console.log('res equals user:', res === user);
debugger;

// 18. Return statement.
topic = '18. Return value/return statement';
function unreachableCode() {
  res = 'This line is reachable.';
  return;
  res = 'This line is unreachable';
}
unreachableCode();
debugger;

// 19. Single line arrow functions, no curly braces, return is implicit.
topic = '19. Return statement implicit in one-line arrow functions.';
const add9 = (x) => x + 9;
res = add9(10);
debugger;

// 20. No return statement returns undefined.
topic = '20. No return statement. Side effect only.';
function add10(x) {
  console.log(x + 10);
}
res = add10(10);
debugger;

// 21. The funciton global object
topic = '21. Function global object.';
res = add10.name;
res = add10.length;
debugger;
