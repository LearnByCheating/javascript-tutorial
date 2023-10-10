/* eslint-disable no-unused-vars, no-debugger */
const topicId = 1;

// 1. Create a Regular Expression.
if (topicId === 1) {
  const re = /findme/; // RegExp literal
  const re2 = new RegExp('findme'); // RegExp object
  const re3 = new RegExp(/findme/); // RegExp object
  const input = 'findme';
  const re4 = new RegExp(input); // RegExp object
  debugger;
}

// 2. The RegExp Global Object.
if (topicId === 2) {
  const re = /findme/;
  let view = typeof re; // 'object'
  view = re instanceof RegExp; // true
  view = re.constructor === RegExp; // true
  view = Object.getPrototypeOf(re); //  RegExp.prototype
  debugger;
}

// 3. Flags.
if (topicId === 3) {
  let str = 'Replace at least one letter A.';
  let view = str.replace(/a/, 'x'); // Replxce at least one letter A.
  view = str.replace(/a/g, 'x'); // Replxce xt lexst one letter A.
  view = str.replace(/a/gi, 'x'); // Replxce xt lexst one letter x.
  str = `Multi-line matching.
At least one line starts with "a".`;
  view = /^A/.test(str); // false
  view = /^A/m.test(str); // true
  debugger;
}

// 4. Character Classes.
if (topicId === 4) {
  const str = 'Letters 0123, ^_.$%/]\n';

  let view = str.replace(/./g, '-'); // '----------------------\n'
  // \w word character [A-Za-z0-9_]
  view = str.replace(/\w/g, '-'); // '------- ----, ^-.$%/]\n'
  // \W non-word character
  view = str.replace(/\W/g, '-'); // 'Letters-0123---_------'
  // \d digit
  view = str.replace(/\d/g, '-'); // 'Letters ----, ^_.$%/]\n'
  // \D non-digit
  view = str.replace(/\D/g, '-'); // '--------0123----------'
  // s white space character
  view = str.replace(/\s/g, '-'); // 'Letters-0123,-^_.$%/]-'
  // \S non-white space character
  view = str.replace(/\S/g, '-'); // '------- ----- -------\n'

  // \specialChar Escapes / \ . + - * ^ = ! | : ? $ ( ) [ ] { } < >
  view = str.replace(/\./g, '-'); // 'Letters 0123, ^_-$%/]\n'
  view = str.replace(/\//g, '-'); // 'Letters 0123, ^_.$%-]\n'
  // In square brackets, escape \ ^ ] and -
  view = str.replace(/[\^\]]/g, '-'); // 'Letters 0123, -_.$%/-\n'
  view = str.replace(/[\^_.$%/\]]/g, '-'); // 'Letters 0123, -------\n'
  debugger;
}

// 5. Groups.
if (topicId === 5) {
  const str = 'Letters 0123, _$%^/.';
  // Sequential Characters:
  let view = str.replace(/ers/, '-'); // 'Lett- 0123, _$%^/.'

  // | Or:
  view = str.replace(/12|e/, '-'); // 'L-tters 0123, _$%^/.'
  view = str.replace(/12|e/g, '-'); // 'L-tt-rs 0-3, _$%^/.'

  // [] Square Brackets: Find any character/range between the brackets
  view = str.replace(/[A-Z]/g, '-'); // '-etters 0123 _$%^/.'
  view = str.replace(/[A-Z\d$]/g, '-'); // '-etters ----- _-%^/.'
  view = str.replace(/[es2,]/g, '-'); // 'L-tt-r- 01-3- _$%^/.'
  // [^ ] Square Brackets with ^: Find any character NOT between the brackets
  view = str.replace(/[^es2,]/g, '-'); // '-e--e-s---2-,-------'

  // ( ) Parentheses (captured groups):
  view = str.replace(/(Let|23)/g, '-'); // '-ters 01-, _$%^/.';
  const phone = '415-555-1234';
  // Test if phone is in a valid phone number format. Without groups.
  view = /^\d{3}[-. ]\d{3}[-. ]\d{4}$/.test(phone);
  // Same as about with captured groups. ([-. ]) is group 1. duplicate group 1 with \1
  view = /^\d{3}([-. ])\d{3}\1\d{4}$/.test(phone);
  debugger;
}

// 6. Boundaries.
if (topicId === 6) {
  let str = 'word, word and word';
  // ^str Matches from the beginning of the input string.
  let view = str.replace(/^word/g, '-'); // '-, word and word';
  // str$ Matches to the end of the input string.
  view = str.replace(/word$/g, '-'); // 'word, word and -';
  // ^str$ Matches from beginning to end of the input string.
  view = str.replace(/(^word$)/g, '-'); // 'word, word and word';

  str = 'cat, category, cat, concat';
  // \bchar Matches any word with char at the beginning of it.
  view = str.replace(/\bcat/g, '-'); // '-, -egory, -, concat';
  // char\b Matches any word with char at the end of it.
  view = str.replace(/cat\b/g, '-'); // '-, category, -, con-';
  // \bword\b Match a full word.
  view = str.replace(/\bcat\b/g, '-'); // '-, category, -, concat';

  // \B Find a match not at the beginning/end of a word.
  view = str.replace(/\Bcat/g, '-'); // 'cat, category, cat, con-';
  view = str.replace(/cat\B/g, '-'); // 'cat, -egory, cat, concat';
  debugger;
}

// 7. Quantifiers.
if (topicId === 7) {
  let str = 'jump jumps jumpsssss jumped';
  // char? Matches zero or one occurrence of char.
  let view = str.replace(/jumps?/g, '-'); // '- - -ssss -ed'
  // char+ Matches one or more occurences of char.
  view = str.replace(/jumps+/g, '-'); // 'jump - - jumped'
  // char* Matches zero or more occurrences of char.
  view = str.replace(/jumps*/g, '-'); // '- - - -ed'

  str = '1x 2xx 3xxx 4xxxx 5xxxxx';
  // char{x} Matches sequence of x chars.
  view = str.replace(/x{3}/g, '-'); // '1x 2xx 3- 4-x 5-xx'
  // char{x,y} Matches sequence of x to y chars.
  view = str.replace(/x{3,4}/g, '-'); // '1x 2xx 3- 4- 5-x'
  // char{x,} Matches sequence of at least x chars.
  view = str.replace(/x{3,}/g, '-'); // '1x 2xx 3- 4- 5-'

  let phone = '415.555.1234';
  const isValid = /^\d{3}[-. ]\d{3}[-. ]\d{4}$/.test(phone); // returns true

  if (isValid) {
    phone = phone.replace(/[. ]/g, '-'); // returns '415-555-1234'
  }
  debugger;
}

// 8. $1-$9 substring matches
if (topicId === 8) {
  const str = 'John Smith';
  let view = str.replace(/(\w+)\s(\w+)/, 'First name: $1, Last name: $2'); // 'First name: John, Last name: Smith'
  view = str.replace(/(\w+)\s(\w+)/, '$2, $1'); // 'Smith, John'
  debugger;
}

// 9. RegExp object.
if (topicId === 9) {
  const str = 'Hello Joey,';
  const name = 'Joey';
  // To use variables in regular expressions, create a RegExp object:
  let view = new RegExp(name).test(str); // true
  view = str.replace(new RegExp(name), 'Johnny'); // 'Hello Johnny'
  debugger;
}

// 10. RegExp Instance methods.
if (topicId === 10) {
  const str = 'John Smith';
  let view = /smith/i.test(str); // true
  view = /smith/i.exec(str); // ["Smith", index: 5, input: "John Smith", groups: undefined]
  debugger;
}

// 11. String Methods that use RegExp.
if (topicId === 11) {
  const str = 'Hello world';
  let view = str.match(/world/);
    // ["world", index: 6, input: "Hello world", groups: undefined]
  const matches = str.matchAll('l');
    // ["l", index: 2, input: "Hello world", groups: undefined]
    // ["l", index: 3, input: "Hello world", groups: undefined]
    // ["l", index: 9, input: "Hello world", groups: undefined]
  view = Array.from(matches);
  view = str.search(/world/); // 6
  view = str.search('world'); // 6
  view = str.replace(/world/, 'planet'); // 'Hello planet'
  // Split string into an array based on the provided separator.
  view = str.split(/[ ,]/); // ['Hello', 'world']
  debugger;
}
