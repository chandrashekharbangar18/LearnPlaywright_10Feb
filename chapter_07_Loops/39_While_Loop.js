// While Loop

// Syntax
// while (condition) {
//   // code to be executed
// }

// Example 1: Print numbers from 1 to 5

let i = 1;  // Initialization
while (i <= 5) {  // Condition
  console.log(i);
    i++; // Incrementing i to avoid infinite loop
}

// Example 2: Calculate the sum of numbers from 1 to 10
let sum = 0;
let j = 1;
while (j <= 10) {
  sum += j; // Adding j to sum
    j++; // Incrementing j to avoid infinite loop
}
console.log("Sum of numbers from 1 to 10 is: " + sum);