/* eslint-disable max-len, no-unused-vars, no-debugger, no-console */
// 1. Literals
let topic = '1. literals'; // Declare and initialize a variable.

console.log('number literal:', 7);
console.log('string literal:', 'Hello');
console.log('boolean literals:', true, false);
console.log('array literal:', ['a', 'b', 'c']);
console.log('object literal:', { name: 'Joey', age: 22 });
debugger;

let x = 7;
console.log('Expression 4 + 3 is not a literal.');
console.log('7 is a primary expression and a number literal');
console.log('x is a variable, not a literal:', x);
console.log('The data type of 7 is:', typeof 7);
console.log('The data type of x is:', typeof x);
debugger;

// 2. Declare and initialize a variable
topic = '2. Declare and initialize a variable';
const constStmt = 'This is a const variable.';
let letStmt;
letStmt = 'This is a let variable.';
debugger;

// Let can change values, const can't
topic = '3. Let vs const variables';
letStmt = 'Let variables can change value.';
debugger;
let errorMsg;
try {
  const constStmt2 = "Const variables can't change value in the same scope";
  debugger;
  constStmt2 = 'If you try it will throw an error';
} catch (err) {
  errorMsg = err.toString();
}
debugger;
errorMsg = null;
debugger;

// Can't redeclare let/const in the same scope.
topic = "4. Can't redeclare let/const in the same scope.";
letStmt = 'Can reassign let variables to new values.';
/* But if you try to redeclare a variable with the same name as another variable or function in the same scope, it will throw a syntax error.'; */
debugger;
// let letStmt = 'This will throw a syntax error';
// const constStmt = 'This will also throw a syntax error';

// 3. Hoisted
topic = '5. Variable declarations are hoisted but not initialized.'
const hoistMe = 'I am undefined until you get to me.'
debugger;

// Let/const variables: block scoped
topic = '6. Const/let are block scoped';
if (true) {
  // New variables declared in a block are not accessible outside the block.
  const blockScopedVar = 'I am block scoped.';
  // values can be assigned to variable in outer scope.
  letStmt = 'New value to outer scoped variable can be assigned from a block'; 
  debugger;
}
errorMsg = 'blockScopedVar is: ' + typeof blockScopedVar;
debugger;
errorMsg = null;
debugger;

// Variable shadowing
topic = '7. Variable shadowing';
if (true) {
  const constStmt = 'let/const can be redeclared in a different scope.';
  debugger;
}
debugger;

// Var variables
topic = '8. Variables declared with var';
var varStmt = 'Declared with var. Assigned to global object';
var varStmt = 'Var can be redeclared in the same scope.';
debugger;
if (true) {
  var varStmt2 = 'Var is function scoped not block scoped.';
  debugger;
}

function myfunc() {
  var varStmt3 = 'This is not accessible outside the function.';
  let letStmt3 = 'let/const are block scoped which includes functions.'
  debugger;
}
myfunc();
debugger;

// Global variables
topic = '9. Global variables';
globalVar = 'Assigned directly to global object';
debugger;

// Expression values
topic = '10. Expression values';
// Functions assigned to expressions store the resolved value of the expression.
if (true) {
  const num = 3 + 4; // Arithetic expression, stores 7
  const str = 'Joey ' + 'Smith'; // String expression, stores 'Joey Smith'
  const isGreater = 7 > 6; // Logical expression, stores true
  debugger;
  // Function expression: stores the anonymous function.
  const double = (x) => {
    const result = x * 2;
    return result;
  };
  // Function call: evaluates to the return value of the function call.
  const res = double(10); // res is set to 20;
  debugger;
}

// Objects assigned by reference.
topic = '11. Objects';
if (true) {
  const obj = { name: 'Joey', age: 22, married: false };
  const obj2 = { name: 'Joey', age: 22, married: false };
  let areEqual = obj === obj2;
  debugger;

  const objCopy = obj;
  areEqual = obj === objCopy;
  obj.age = 23;
  debugger;

  // Destructuring assignment: object
  topic = '12. Objects: destructuring';
  const { name: userName, married, age } = obj;
  debugger;
}

// Arrays assigned by reference.
topic = '13. Arrays';
if (true) {
  const arr = ['Joey', 'Sheena', 'Johnny'];
  arr.push('Judy');
  debugger;

  // Destructuring assignment: arrays
  topic = '14. Arrays: destructuring';
  const [user1, , user3] = arr;
  debugger;
}
