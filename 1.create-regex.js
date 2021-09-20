const txt = "All programming language studies starts with hello world!";

// constructor
const regex1 = new RegExp("hello");
console.log(regex1.test(txt)); // true

// literal
const regex2 = /worlds/;
console.log(regex2.test(txt)); // false
