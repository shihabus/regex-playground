const txt = "All programming language studies starts with hello world!";

const regex1 = new RegExp("hello");
const regex2 = /worlds/;

// 1. exec
// return array of matches
console.log(regex1.exec(txt));
/**
 * [ 'hello',
      index: 45,
      input: 'All programming language studies starts with hello world!',
      groups: undefined ]
 */

console.log(regex2.exec(txt)); // null

// 2. match
// same as exec
console.log(txt.match(regex1));
/**
 * [ 'hello',
      index: 45,
      input: 'All programming language studies starts with hello world!',
      groups: undefined ]
 */

console.log(txt.match(regex2)); // null

// 3. search
// returns the index of match
console.log(txt.search(regex1)); // 45

console.log(txt.search(regex2)); // -1

// 4. split
// split the text into array based on a delimiter
console.log(txt.split(regex1)); // [ 'All programming language studies starts with ', ' world!' ]

console.log(txt.split(regex2)); // [ 'All programming language studies starts with hello world!' ]

// 5. replace
// replace matches with a string
console.log(txt.replace(regex1, "hi")); // All programming language studies starts with hi world! 

console.log(txt.replace("universe")); // All programming language studies starts with hello world!