/* eslint-disable no-console */
// To run this file, open the terminal at the root of the javascript-tutorial project. Then run:
// node modules/commonjs/app
const path = require('path');
const { existsSync, readFileSync } = require('fs');
const calculator = require('./calculator'); // Calculator namespace
const { double, triple } = require('./calculator'); // Destructing assignment
const { half, third } = require('./calculator2');

const filePath = path.join('.', 'modules', 'commonjs', 'calculator.js');
if (existsSync(filePath)) {
  console.log(readFileSync(filePath, 'utf8'));
} else {
  console.log('File does not exist.');
}

const res1 = calculator.double(10);
const res2 = calculator.triple(10);

const res3 = double(10);
const res4 = triple(10);

const res5 = half(10);
const res6 = third(10);

console.log(res1, res2, res3, res4, res5, res6);
