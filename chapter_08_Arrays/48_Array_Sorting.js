// Array sorting in JavaScript can be done using the built-in `sort()` method. 
// This method sorts the elements of an array in place and returns the sorted array. 
// By default, the `sort()` method sorts the elements as strings in ascending order. 
// However, you can provide a compare function to define a custom sort order.

// Example of sorting an array of strings
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// Sorting the array in ascending order (default behavior)
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']

console.log('-----------------------');

// Example of sorting an array of numbers
let scores = [10, 1, 23, 9, 89];
scores.sort(); // Default sorting (as strings)
console.log(scores); // Output: [1, 10, 23, 89, 9] (may not be as expected for numbers)

console.log('-----------------------');

// Sorting the array in ascending order using a compare function
scores.sort((a, b) => a - b);
console.log(scores); // Output: [1, 9, 10, 23, 89]

console.log('-----------------------');

// Sorting the array in descending order using a compare function
scores.sort((a, b) => b - a);
console.log(scores); // Output: [89, 23, 10, 9, 1]
