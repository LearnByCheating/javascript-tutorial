/* eslint-disable no-debugger, no-console,  no-unused-vars, import/extensions */
import { double, triple } from './calculator.mjs';

const topic = '7. Stack Trace';
let res;
try {
  res = double(Infinity);
} catch (err) {
  console.error(err.stack); // 'Error: Must be a finite number.\n at file:line'
}
debugger;
console.clear();

try {
  res = triple(10);
} catch (err) {
  console.error(err.stack); // 'ReferenceError: numVar is not defined\n at file:line'
}
debugger;
