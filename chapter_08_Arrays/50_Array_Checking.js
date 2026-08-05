// Array checking
// Check if a variable is an array

let res1 = Array.isArray([1, 2, 3]); // Output: true - checks if the variable is an array
console.log(res1);

let res2 = Array.isArray({a: 1, b: 2}); // Output: false - checks if the variable is an array
console.log(res2);

let res3 = Array.isArray('Hello'); // Output: false - checks if the variable is an array
console.log(res3); 

console.log('-----------------------------------------------------');

// every function - checks if all elements in an array pass a test (provided as a function).
// It returns true if all elements pass the test, otherwise it returns false.

let arr1 = [1, 2, 3, 4, 5];

let res4 = arr1.every((value) => value >= 1); // Output: true - checks if all elements in the array are greater than or equal to 1
console.log(res4);

let res5 = arr1.every((value) => value < 0);  // Output: false - checks if all elements in the array are less than 0
console.log(res5);

console.log('-----------------------------------------------------');

// some function - checks if at least one element in an array passes a test (provided as a function).
// It returns true if at least one element passes the test, otherwise it returns false.

let arr2 = [1, 2, 3, 4, 5];
let res6 = arr2.some((value) => value > 3); // Output: true - checks if at least one element in the array is greater than 3
console.log(res6);

let res7 = arr2.some((value) => value < 0); // Output: false - checks if at least one element in the array is less than 0
console.log(res7);