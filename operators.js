/* eslint-disable no-unused-vars, no-debugger */
const topicId = 1;
let res;
let x;

// 1. Expressions.
if (topicId === 1) {
  // Arithmetic, string, logical, left-hand-side, primary expressions
  res = 4 + 3; // 7
  res = 'Hello' + ' world!'; // 'Hello world!'
  res = 7 > 6; // true
  res = typeof 7; // 'number'
  res = 7; // 7
  debugger;
}

// 2. Operators.
if (topicId === 2) {
  // Unary, binary, ternary operators
  res = typeof 7; // 'number'
  res = 4 + 3; // 7
  res = 4 > 3 ? '4 is greater than 3' : '4 is not greater than 3'; // '4 is greater than 3'
  debugger;
}

// 3. Assignment operators.
if (topicId === 3) {
  // standard assignment operator
  x = 4; // 4
  // compound assignment operators
  x += 3; // 7; Same as x = x + 3
  x -= 2; // 5; Same as x = x - 2
  x *= 4; // 20; Same as x = x * 4
  x /= 5; // 4; Same as x = x / 5
  debugger;
  x = null;
}

// 4. Arithmetic operators.
if (topicId === 4) {
  // Precedence - Multiplication/division come before addition/subtraction
  res = 4 - 2 + 3; // 5
  res = 4 * 2 + 3; // 11
  res = 3 + 4 * 2; // 11; executes as 4 * 2 = 8; then 8 + 3 = 11
  // Grouping in parentheses takes highest precedence
  res = (3 + 4) * 2; // 14
  debugger;

  // Conversions. Number(val) except when +
  res = 4 * '2'; // 8
  res = 4 / '2'; // 2
  res = 4 - '2'; // 2
  res = 4 + '2'; // '42'
  res = 7 + 'Eleven'; // '7Eleven'
  res = 4 + false; // 4
  res = 4 + true; // 5
  res = 4 + NaN; // NaN
  debugger;

  // Binary arithmetic operators + - * / % **
  res = 4 + 3; // 7
  res = 4 - 3; // 1
  res = 4 * 3; // 12
  res = 4 / 3; // 1.333
  // Remainder operator
  res = 4 % 3; // 1
  res = 4 ** 3; // 64
  debugger;

  // Unary arithmetic operators
  x = 7; // 7
  ++x; // 8
  --x; // 7
  res = x++; // res is 7, x is 8. Update happens after x is used.
  res = x--; // res is 8, x is 7. Update happens after x is used.
  res = ++x; // res is 8, x is 8.
  res = --x; // res is 7, x is 7.
  debugger;

  // Unary plus/minus operator
  x = '7'; res = null;
  res = +x; // res is 7, x is '7'
  res = -x; // res is -7, x is '7'
  debugger;
  x = null;
}

// 5. Comparison operators.
if (topicId === 5) {
  // Strict equality/inequality: must match data type
  res = (5 + 2) === 7; // true
  res = (5 + 2) !== 8; // true
  res = 7 === '7'; // false, must match data type

  // object including arrays are compared by reference
  res = { name: 'Joey' } === { name: 'Joey' }; // false. Different objects in memory.
  const arr = [1, 2, 3];
  res = arr === [1, 2, 3]; // false, different arrays in memory.
  const arrCopy = arr; // Assign variable to arr.
  res = arr === arrCopy; // true, the variables point to the same array in memory.

  // Loose equality (not recommended): Converts data type.
  res = 7 == '7'; // true
  res = 1 == true; // true
  res = 0 == false; // true
  res = undefined == null; // true

  // Relational comparisons: > >= < <=
  res = 7 > 6; // true
}

// 6. Logical Operators: && (and), || (or) , and ! (not)
// Use logical operators to evaluate 2 or more expressions.
if (topicId === 6) {
  // When used in conditionals, returns true or false
  // && (AND) returns true only if both expressions are true
  if (true && true) res = true;
  x = 7;
  // Check if x is a number. If so, check if it is greater than 0.
  if (typeof x === 'number' && x > 0) res = 'x contains a positive number';
  // || (OR) returns true if one or both of the expressions is true
  if (true || false) res = true;
  if (x < 1 || x > 10) res = 'x is not between 1 and 10';

  // ! (NOT) returns the opposite boolean
  if (!false) res = true;
  // if x is not a truthy value
  if (!x) res = 'X is false, null, undefined, 0, NaN, or an empty string';
  debugger;

  // When used with expressions (short-circuit evaluation)
  // && (AND) returns left operand if it can be converted to false, otherwise returns right operand.
  res = 0 && 2; // 0
  res = 1 && null; // null
  res = 1 && 2; // 2
  const user1 = { name: 'Joey', employment: 'Web Developer' };
  const user2 = { name: 'Sheena' };
  res = user1.employment && 'Employed'; // 'Employed'
  res = user2.employment && 'Employed'; // undefined

  // || (OR) returns left operand if it can be converted to true; otherwise returns right operand.
  res = 0 || 2; // 2
  res = 1 || 2; // 1
  res = user1.employment || 'Unemployed'; // 'Web Developer'
  res = user2.employment || 'Unemployed'; // 'Unemployed'
  debugger;
}

// 7. String operators.
if (topicId === 7) {
  // Comparison operator compares strings
  res = 'Hello world' !== 'hello world'; // true
  // Strings compared in lexicographical order (char by char).
  // Chars are compared by their unicode decimal: [0-9]=[48-57],  [A-Z]=[65-90], [a-z]=[97-122].
  res = 'a' < 'z'; // true
  res = 'Alex' < 'Brenda'; // true
  res = 'a' > 'Z'; // true

  // + operator concatenates strings
  res = 'Hello' + ' world'; // "Hello world".

  // Compound assignment operator += concatenates a series of strings.
  res = '<ul>';
  const arr = ['Joey', 'Sheena', 'Johnny', 'Judy'];
  arr.forEach((name) => {
    res += `<li>${name}</li>`;
  });
  res += '</ul>';
  debugger;
}
