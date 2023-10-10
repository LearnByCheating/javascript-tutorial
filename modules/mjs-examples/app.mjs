/* eslint-disable */
// To run this file, open the terminal at the root of the javascript-tutorial project. Then run:
// node modules/mjs/app.mjs
import path from 'path';
import { existsSync, readFileSync } from 'fs';
import calculator from './calculator.mjs';
import { half, third } from './calculator2.mjs';

const filePath = path.join('.', 'modules', 'mjs', 'calculator.mjs');
if (existsSync(filePath)) {
  console.log(readFileSync(filePath, 'utf8'));
}

const res1 = calculator.double(10);
const res2 = calculator.triple(10);

const res3 = half(10);
const res4 = third(10);

console.log(res1, res2, res3, res4);
