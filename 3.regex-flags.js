const txt = "All programming language studies starts with hello world!";

const regex = /S\s/gi;

console.log(txt.match(regex)); // [ 's ', 's ' ]

console.log(regex.exec(txt)); // [ 's ', index: 31, input: '....', groups: undefined ]
console.log(regex.exec(txt)); // [ 's ', index: 38, input: '....', groups: undefined ]
console.log(regex.exec(txt)); // null
