/* eslint-disable import/extensions, no-console */

// To run this file, open the terminal at the root of the javascript-tutorial project. Then run:
// node modules/mjs/app-aliases.mjs
// eslint-disable-next-line import/extensions
import * as divider from './calculator2.mjs';
import { half as by2, third as by3 } from './calculator2.mjs';

const res1 = divider.half(10);
const res2 = divider.third(10);

const res3 = by2(10);
const res4 = by3(10);

console.log(res1, res2, res3, res4);
