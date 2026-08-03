// Adding and Removing Elements from an Array

// Adding Elements
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// Adding an element to the end of the array
fruits.push("date"); // Adds "date" to the end of the array
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

 // Removing Elements
// Removing the last element from the array
fruits.pop(); // Removes "date" from the end of the array
console.log(fruits); // Output: ["apple", "banana", "cherry"]

console.log("--------------------------------------------------");

// Push multiple elements to the end of the array
fruits.push("elderberry", "fig", "grape");
console.log(fruits); // Output: ["apple", "banana", "cherry", "elderberry", "fig", "grape"]

// Removing multiple elements from the end of the array
fruits.pop(); // Removes "grape"
fruits.pop(); // Removes "fig"
fruits.pop(); // Removes "elderberry"
console.log(fruits); // Output: ["apple", "banana", "cherry"]

console.log("--------------------------------------------------");

// Adding an element to the beginning of the array
fruits.unshift("avocado"); // Adds "avocado" to the beginning of the array
console.log(fruits); // Output: ["avocado", "apple", "banana", "cherry"]

// Removing the first element from the array
fruits.shift(); // Removes "avocado" from the beginning of the array
console.log(fruits); // Output: ["apple", "banana", "cherry"]