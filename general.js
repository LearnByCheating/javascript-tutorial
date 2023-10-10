/* eslint-disable no-debugger, max-len, no-multiple-empty-lines */
console.log('This is a JavaScript file.');

let globalObj;
// The global object is 'window' in the browser, 'global' in Node.
if (typeof window === 'object') {
  globalObj = 'window';
} else if (typeof global === 'object') {
  globalObj = 'global';
}

/*
// Using console.logs to view values:
console.log(7, typeof 7); // number
console.log('Hello', typeof 'Hello'); // string
console.log(true, typeof true); // boolean
let x;
console.log(undefined, typeof x); // undefined
x = null; // The value null represents the intentional absence of any value.
console.log(null, typeof x); // object. The typeof operator returns object for null.
console.log('{}', typeof {}); // object
console.log('[]', typeof []); // object. Array is a type of object.
console.log('function() {}', typeof function() {}); // function. Although, function is a type of object.
 */

let topic = 'Data types - Primitives and objects.';
let datatype = typeof 7;
debugger;
datatype = typeof 'Hello';
datatype = typeof true;
let x;
datatype = typeof x;
x = null; // The value null represents the intentional absence of any value.
datatype = typeof x; // while null is a data type, typeof null returns "object".
datatype = typeof {};
datatype = typeof [];
datatype = typeof function() {};

topic = 'Global Object';
username = 'Steve';
debugger;
let tryout = window.username;
tryout = this.username;
tryout = username;
debugger;

topic = 'Built-in Objects';
let getPrototype = Object.getPrototypeOf(7);
getPrototype = (7).__proto__;
getPrototype = toString.call(7);
getPrototype = Object.getPrototypeOf('hello');
getPrototype = toString.call('hello');
getPrototype = Object.getPrototypeOf(true);
getPrototype = toString.call(false);
const user = { name: 'Joey', age: 22 };
getPrototype = Object.getPrototypeOf(user);
getPrototype = toString.call(user);
debugger;
