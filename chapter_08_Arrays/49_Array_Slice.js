// Slicing and Combining Arrays
// slice(start, end-1) - returns a new array containing a portion of the original array, 
// from the start index to the end index (not inclusive).
// EXAMPLE 1

let num =  [1, 2, 3, 4, 5];
console.log(num.slice(1, 4)); // Output: [2, 3, 4] - returns elements from index 1 to index 3 (4 is not included)
console.log(num.slice(2)); // Output: [3, 4, 5] - returns elements from index 2 to the end of the array
// if we dont give the end it will retirn all the elements from start to end of the array

console.log(num.slice(-3)); // Output: [3, 4, 5] - returns the last 3 elements of the array
console.log(num.slice(0)); // Output: [1, 2, 3, 4, 5] - returns all elements of the array
console.log(num.slice(-5)); // Output: [1, 2, 3, 4, 5] - returns a shallow copy of the array

console.log('-----------------------------------------------------');

// Concatinating Arrays
// concat() - returns a new array that is the combination of two or more arrays.
let arr1 = [1, 2];
let arr2 = [3, 4];

let arr3 = console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4] - combines arr1 and arr2 into a new array
let arr4 = console.log(arr1.concat(arr2, [5, 6])); // Output: [1, 2, 3, 4, 5, 6] - combines arr1, arr2 and a new array into a new array
console.log('-----------------------------------------------------');

// spread way of combining arrays - modern way of combining arrays
// spread concate with three dots (...) - returns a new array that is the combination of two or more arrays.

let arr5 = [...arr1, ...arr2]; // Output: [1, 2, 3, 4] - combines arr1 and arr2 into a new array using spread operator
console.log(arr5);

console.log('-----------------------------------------------------');

// Join - converts an array into a string, with elements separated by a specified separator.

let result1 = ['pass', 'fail', 'N/A'].join(', ');
console.log(result1); // Output: "pass,fail,N/A" - joins the elements of the array into a string, separated by commas

let result2 = ['pass', 'fail', 'N/A'].join(' - ');
console.log(result2); // Output: "pass - fail - N/A" - joins the elements of the array into a string, separated by ' - '

let result3 = ['pass', 'fail', 'N/A'].join('');
console.log(result3); // Output: "passfailN/A" - joins the elements of the array into a string, with no separator

let result4 = ['pass', 'fail', 'N/A'].join(' = ');
console.log(result4); // Output: "pass = fail = N/A" - joins the elements of the array into a string, separated by ' = '