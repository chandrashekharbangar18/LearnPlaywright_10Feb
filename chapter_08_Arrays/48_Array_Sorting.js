// Array sorting in JavaScript can be done using the built-in `sort()` method. 
// This method sorts the elements of an array in place and returns the sorted array. 
// By default, the `sort()` method sorts the elements as strings in ascending order. 
// However, you can provide a compare function to define a custom sort order.

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// Sorting the array in ascending order (default behavior)
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']

let scores = [45, 78, 90, 46, 89];
// Sorting the array in ascending order using a compare function
scores.sort((a, b) => a - b);
console.log(scores); // Output: [45, 46, 78, 89, 90]