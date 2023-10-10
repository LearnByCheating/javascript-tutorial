/* eslint-disable no-new-wrappers, no-debugger, no-unused-vars */
const topicId = 1;

// 1. Boolean: data type and Global object.
if (topicId === 1) {
  let viewType = typeof true;
  viewType = typeof false;
  viewType = typeof 'true';
  const boolProto = Object.getPrototypeOf(true);
  viewType = typeof boolProto;
  const boolObj = new Boolean(1 < 2);
  viewType = typeof boolObj;
  debugger;
  let instanceMethodRes = boolObj.valueOf();
  instanceMethodRes = true.toString();
  debugger;
}

// 2. Boolean: truthy/falsy.
if (topicId === 2) {
  // Boolean function called in a non-constructor context returns a Boolean primitive.
  // Falsy: false, '', 0, NaN, null, undefined
  // Truthy: everything else.
  let x;
  let bool = Boolean(x);
  bool = Boolean(''); // empty string is false
  bool = Boolean(' '); // string with space is true.
  bool = Boolean('false'); // all strings are true
  bool = Boolean(-1); // all numbers except 0 and NaN are true
  bool = Boolean([]); // empty array and object literals are true.
  bool = !!('Some string'); // !! (not not) converts to boolean value.
  debugger;
}

// 3. Boolean Expressions: comparison and logical operators.
if (topicId === 3) {
  // Boolean literal is true or false.
  let bool = false;
  // Expressions with comparison operators resolve to a Boolean value.
  bool = 1 < 2;
  bool = typeof true === 'boolean';
  bool = typeof 'true' !== 'boolean';
  debugger;
  // Logical and operator: &&. Both must be true
  bool = 1 < 2 && 4 < 3;
  bool = 1 < 2 && 3 < 4;
  // Logical or operator: ||. At least one must be true.
  bool = 1 < 2 || 4 < 3;
  bool = 2 < 1 || 4 < 3;
  // Logical not operator: !. Resolves to the opposite Boolean value.
  bool = !true;
  bool = !(2 < 1);
  debugger;
}

// 4. If...Else Statements.
if (topicId === 4) {
  let grade;
  let score = 77;

  if (score >= 60) {
    grade = 'Pass';
  }
  debugger;

  if (score >= 60) {
    grade = 'Pass';
  } else {
    grade = 'Fail';
  }
  debugger;

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  debugger;

  // 4b. Single line if statements.
  if (score >= 60) grade = 'Pass';
  debugger;

  // 4c. Ternary conditional statement.
  score = 57;
  grade = score >= 60 ? 'Pass' : 'Fail';
  debugger;
}

// 5. Switch statement.
if (topicId === 5) {
  let pass;
  const grade = 'C';
  switch (grade) {
    case 'A': {
      pass = true;
      break;
    }
    case 'B': {
      pass = true;
      break;
    }
    case 'C': {
      pass = true;
      break;
    }
    case 'D': {
      pass = true;
      break;
    }
    default: {
      pass = false;
    }
  }
  debugger;
}
