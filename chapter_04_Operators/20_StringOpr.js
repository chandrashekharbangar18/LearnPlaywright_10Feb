// Concatination of Strings
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // Output: Hello World

// Using template literals
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice! 

// Repeating Strings
let str = "Hi! ";
let repeatedStr = str.repeat(3);
console.log(repeatedStr); // Output: Hi! Hi! Hi!

// Accessing Characters in a String
let message = "Hello";
console.log(message[0]); // Output: H

// String Length
console.log(message.length); // Output: 5

// String Methods
let text = "JavaScript is awesome!";
console.log(text.toUpperCase()); // Output: JAVASCRIPT IS AWESOME!
console.log(text.toLowerCase()); // Output: javascript is awesome!
console.log(text.includes("awesome")); // Output: true
console.log(text.indexOf("is")); // Output: 11
console.log(text.slice(0, 10)); // Output: JavaScript
console.log(text.replace("awesome", "great")); // Output: JavaScript is great!

