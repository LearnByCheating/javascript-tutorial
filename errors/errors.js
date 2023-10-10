/* eslint-disable no-debugger, no-console, no-inner-declarations, no-unused-vars, no-constant-condition, max-len */
const topicId = 1;

// 1 Overview, try...catch statements, and error instance properties.
if (topicId === 1) {
  let doubled = x * 2; // crashes the program and logs: Uncaught ReferenceError ReferenceError: x is not defined

  try {
    let doubled = x * 2;
  } catch (err) {
    console.error(err.toString()); // logs: ReferenceError: x is not defined
  }

  try {
    let doubled = x * 2;
  } catch (err) {
    console.error('E1:', err); // returns the error object
    console.error('E2:', err.name); // returns 'ReferenceError'
    console.error('E3:', err.message); // returns 'x is not defined'
    console.error('E4:', err.toString()); // returns `${err.name}: ${err.message}`
    console.error('E5:', err.stack); // returns 'ReferenceError: x is not defined\n at file:line'
  }
}

// 2. Syntax Errors.
if (topicId === 2) {
  // lett y = 9; // SyntaxError: Unexpected identifier
  // Syntax Errors Can't be caught in try/catch blocks.

  // function dbl(num { return num * 2; } // SyntaxError: Unexpected token '{'
}

// 3. Reference Errors.
if (topicId === 3) {
  // x; // ReferenceError: x is not defined at file:line
  try {
    let doubled = x * 2; // ReferenceError: y is not defined at file:line
  } catch (err) {
    console.error(err.toString()); // logs: ReferenceError: x is not defined
  }

  console.clear();
  try {
    nofunc();
  } catch (err) {
    console.error(err.toString()); // ReferenceError: nofunc is not defined
    debugger;
  }
}

// 4. Type Errors.
if (topicId === 4) {
  try {
    const x = 7;
    x = 9; // TypeError: Assignment to constant variable at file:line
    x(); // TypeError: x is not a function at file:line
  } catch (err) {
    console.error(err.toString()); // `${err.name}: ${err.message}`
  }
  debugger;
}

// 5. Range Errors.
if (topicId === 5) {
  try {
    function addOne(num) {
      addOne(++num);
    }
    addOne(0);
  } catch (err) {
    console.error(err.toString()); // RangeError: Maximum call stack size exceeded.
  }
  debugger;
}

// 6. Exception
if (topicId === 6) {
  // Handle exception in the normal flow of your code (no error).
  function checkNum1(num) {
    if (!Number.isFinite(num)) return 'Must be a finite number.';
    return 'ok';
  }
  let res = checkNum1(10); // Returns "ok"
  res = checkNum1(Infinity); // Must be a finite number.
  debugger;

  // Return error object without throwing.
  function checkNum2(num) {
    if (!Number.isFinite(num)) return new Error('Must be a finite number.');
    return 'ok';
  }
  res = checkNum2(Infinity);
  res.toString(); // Error: Must be a finite number.
  debugger;

  // Throw error without creating an Error object.
  function checkNum3(num) {
    if (!Number.isFinite(num)) throw 'Must be a finite number.';
    return 'ok';
  }
  try {
    res = checkNum3(Infinity);
  } catch (err) {
    console.error(err); // Must be a finite number.
  }
  debugger;

  // Throw an Error object.
  function checkNum4(num) {
    if (!Number.isFinite(num)) {
      throw new Error('Must be a finite number.');
    }
    return 'ok';
  }
  try {
    res = checkNum4(Infinity);
  } catch (err) {
    console.error(err.toString()); // Error: Must be a finite number.
  }
  debugger;
}
