let str = "Hello, World!";
console.log(str.length); // length always start from 1

// Access by index
console.log(str[0]);  // H
console.log(str[3]);  // l

console.log(str.at(-1));  // !
console.log(str.at(-5));  // o

console.log(str.charAt(1));  // e
console.log(str.charAt(11)); // d

// charCodeAt() - Unicode value
console.log(str.charCodeAt(3)); // 108