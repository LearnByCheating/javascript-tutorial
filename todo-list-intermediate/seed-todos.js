const getDueDate = (days) => {
  const today = Date.now();
  const oneDay = 86400000;
  return new Date(today + (oneDay * days));
};

const todos = [
  {
    id: 1, task: 'JavaScript General', due: getDueDate(1), done: false, details: 'Data types, global object, built-in global objects',
  },
  {
    id: 2, task: 'Literals and Variables', due: getDueDate(2), done: false, details: 'Literals, primitive vs object variables, const and let vs var, scope, destructuring assignment',
  },
  {
    id: 3, task: 'Expressions and Operators', due: getDueDate(3), done: false, details: 'Expressions, assignment operators, arithmetic operators, comparison operators, logical operators, string operators',
  },
  {
    id: 4, task: 'Conditional Statements and Booleans', due: getDueDate(4), done: false, details: 'Conditionals (if statements, ternary statements, and switch statements) and Booleans (false/false).',
  },
  {
    id: 5, task: 'Loops', due: getDueDate(5), done: false, details: 'For...of, for...in, for, while, and do...while loops.',
  },
  {
    id: 6, task: 'Functions', due: getDueDate(6), done: false, details: 'Function declarations, arrow functions, methods, parameters, rest parameters, an return statements',
  },
  {
    id: 7, task: 'Strings', due: getDueDate(7), done: false, details: 'String literals, template strings, string methods.',
  },
  {
    id: 8, task: 'Numbers and Math', due: getDueDate(8), done: false, details: 'Number literals, Math Global Object.',
  },
  {
    id: 9, task: 'Arrays', due: getDueDate(9), done: false, details: 'Creating arrays, static and instance properties and methods, shallow copies, sets.',
  },
  {
    id: 10, task: 'Regular Expressions', due: getDueDate(10), done: false, details: 'Regular Expression literals and objects, syntax, methods, string regexp methods.',
  },
  {
    id: 11, task: 'Dates', due: getDueDate(11), done: false, details: 'Number literals, Math Global Object.',
  },
  {
    id: 12, task: 'Objects', due: getDueDate(12), done: false, details: 'Object literals, properties, methods, this, spread operator, static and instance properties and methods.',
  },
  {
    id: 13, task: 'Classes', due: getDueDate(13), done: false, details: 'Class declarations, static and instance properties and methods, and inheritance.',
  },
  {
    id: 14, task: 'Modules', due: getDueDate(14), done: false, details: 'CommonJS require and module.exports, import and export statements.',
  },
  {
    id: 15, task: 'Promises', due: getDueDate(15), done: false, details: 'Callback functions, existing promises, create promises, thenables, async/await.',
  },
  {
    id: 16, task: 'Web APIs', due: getDueDate(16), done: false, details: 'Console, timers, web storage, fetch.',
  },
  {
    id: 17, task: 'DOM', due: getDueDate(17), done: false, details: 'Select and minipulate nodes and elements, traverse the DOM, events, forms.'
  },
  {
    id: 18, task: 'JSON', due: getDueDate(18), done: false, details: 'JSON syntax, JSON global object, stringify and parse methods.'
  },
  {
    id: 19, task: 'Errors', due: getDueDate(19), done: false, details: 'Standard built-in errors, user-defined exceptions, throw, error handling.'
  },
];

export default todos;
