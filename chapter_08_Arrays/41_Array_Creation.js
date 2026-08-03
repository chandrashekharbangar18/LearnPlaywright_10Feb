// Array

let fruits =  []; // empty array;
console.log(fruits.length); // 0

let fresh_Fruits = ["Apple", "Mango", "Banana", "Grapes"]; // string array with values
console.log(fresh_Fruits.length); // 4
// Array values 4 with index 0 to 3 

let numbers = [1, 2, 3, 4, 5]; // number array with values
console.log(numbers.length); // 5

let mixed_Array = [1, "Hello", true, null]; // mixed array with different data types
console.log(mixed_Array.length); // 4
// JS array can hold different data types in the same array - Heterogeneous array


// Creating Arrays

// Array Literals
let colors = ["Red", "Green", "Blue"]; // using array literal syntax 

console.log(colors.length); // 3

console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue 
console.log(colors[3]); // undefined - index out of bounds


// Array Constructor
let score1 =  new Array(5); // creates an array of length 5 with empty slots
console.log(score1.length); // 5
console.log(score1);

let score2 = new Array(10, 20, 30, 40, 50); // creates an array with values [10, 20, 30, 40, 50]
console.log(score2.length); // 5
console.log(score2);
console.log(score2[0]); // 10

// Array with of
let score3 = Array.of(100, 200, 300, 400, 500); // creates an array with values [100, 200, 300, 400, 500]
console.log(score3.length); // 5
console.log(score3);
console.log(score3[0]); // 100

// Array with from
let chars = Array.from("Hello"); // creates an array from a string, each character becomes an element
// chars = ["H", "e", "l", "l", "o"]

console.log(chars.length); // 5
console.log(chars);
console.log(chars[0]); // H


// Array 
let arr = new Array(3); // creates an array of length 3 with empty slots
console.log(arr.length);
console.log(arr);
