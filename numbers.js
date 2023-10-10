/* eslint-disable no-unused-vars, no-debugger, no-console */

const topicId = 1;
let view;
let num;

// 1. Number: data type and Global object.
if (topicId === 1) {
  // Number literal, primary expression:
  console.log(7);
  // Numeric expression - resolves to a number literal:
  console.log(4 + 4);
  // Number variable:
  num = 9;
  // JS numbers are floating points (have non-fixed decimal points)
  num = 10 / 8; // 1.25
  num = 10 / 3; // 3.3333333333333335
  num = 10 / 2; // 5
  // Number is a primitive data type
  view = typeof 7; // 'number'
  // Number includes symbolic values +Infinity/Infinity, -Infinity, NaN
  view = typeof NaN; // 'number'
  view = typeof Infinity; // 'number'
  view = typeof '7'; // 'string'
  // BigInt data type introduced with ES2020 for very large numbers.
  // Append n to number literal to make it BigInt data type
  view = typeof 9007199254740992n; // 'bigint'
  // Or call BigInt and pass in the number.
  num = Number.MAX_SAFE_INTEGER + 1; // 9007199254740992
  view = typeof (BigInt(num)); // 'bigint'
  debugger;

  // Number built-in global object
  view = typeof Number; // 'function'
  // Numbers can be created by the Number constructor function.
  num = new Number(7); // Number (7)
  view = typeof num; // 'object'
  view = num.constructor === Number; // true
  debugger;
}

// 2. Number function: convert other data types to number.
if (topicId === 2) {
  view = Number('7'); // 7
  view = Number(''); // 0
  view = Number('    '); // 0
  view = Number(null); // 0
  view = Number([]); // 0
  view = Number(false); // 0
  view = Number(true); // 1
  view = Number(undefined); // NaN
  view = Number('some text'); // NaN
  view = Number({}); // NaN
  debugger;
};

// 3. Number: static methods and properties.
if (topicId === 3) {
  // parseInt/parseFloat
  view = Number.parseInt('1.9'); // 1
  // Number.parseInt and parseInt work the same
  view = parseInt('2.9'); // 2
  view = parseInt('3.9 and some text'); // 3
  view = parseInt('This does not work 3.8'); // NaN
  // Number.parseFloat and parseFloat work the same
  view = Number.parseFloat('4.1'); // 4.1
  view = parseFloat('5.2'); // 5.2
  view = parseFloat('6'); // 6
  view = parseFloat('5.2 and some text'); // 5.2
  view = parseFloat('This does not work 5.3'); // NaN
  debugger;

  // Test numbers
  // True if finite number. False if Infinity, NaN, other data type.
  view = Number.isFinite(9999999); // true
  view = Number.isFinite('9999999'); // false
  view = Number.isFinite(NaN); // false
  view = Number.isNaN('11'); // false
  view = Number.isNaN(Number('some text')); // true
  view = Number.isInteger(11); // true
  view = Number.isInteger(11.9); // false
  view = Number.isSafeInteger(11); // true
  view = Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
  view = Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false
  debugger;

  // Static properties
  view = Number.MAX_SAFE_INTEGER; // 9 quadrillion
  view = Number.MIN_SAFE_INTEGER; // -9 quadrillion
  debugger;
}

// 4. Number prototype: instance methods.
if (topicId === 4) {
  // Prototype of a number value is Number.prototype
  view = Object.getPrototypeOf(7) === Number.prototype;
  view = typeof Number.prototype; // 'object'

  // Instance methods
  view = num.valueOf(); // 7
  // Convert number to String:
  view = (1995.98).toString(); // '1995.98'
  // Parameter: digits after the decimal point. Rounds.
  view = (1995.48).toFixed(1); // '1995.5'
  view = (1995.48).toFixed(3); // '1995.480'
  // Parameter: total number of digits. Rounds.
  view = (1995.48).toPrecision(5); // '1995.5'
  view = (1995.48).toPrecision(7); // '1995.480'

  // To Locale String (using locale format)
  // User browser language/country settings
  view = (1995.48).toLocaleString(); // '1,995.48'
  // Set language/country settings
  view = (1995.48).toLocaleString('de-DE'); // Germany: '1.995,48'
  view = (1995.48).toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // '$1,995.48'
  debugger;
}

// 5. Math Object
if (topicId === 5) {
  view = Math.PI; // 3.141592653589793
  view = Math.round(1995.95); // 1996
  view = Math.trunc(1995.95); // 1995
  view = Math.floor(1995.95); // 1995
  view = Math.ceil(1995.01); // 1996
  view = Math.max(7, -5, 12, 0, 9); // 12
  view = Math.min(7, -5, 12, 0, 9); // -5
  view = Math.sqrt(81); // 9
  view = Math.cbrt(27); // 3
  // Generate a random number between 0 (inclusive) and 1 (exclusive).
  view = Math.random();
  // Generate a random number between 1 and 10.
  view = Math.floor(Math.random() * 10) + 1;
  debugger;
}
