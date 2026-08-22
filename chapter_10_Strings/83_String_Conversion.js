// String Conversion

console.log((200).toString());      // "200"

console.log((true).toString());     // "true"

console.log(Number("100"));     // 100

console.log(parseInt("42gjb"));     // 42

console.log(parseFloat("3.142gjb")); //3.14

// Immutable string
let str = "hello";
str[0] = "H";
console.log(str);  // hello

let upper = str.toUpperCase();
console.log(str);               // hello
console.log(upper);             // HELLO