// Searching an element in an array
let results = ['pass', 'fail', 'error', 'fail', 'pass'];

// indexOf() method returns the first index of the specified element in the array. 
// If the element is not found, it returns -1.

console.log(results.indexOf('fail')); // 1 --> The first occurrence of 'fail' is at index 1
console.log(results.indexOf('pass')); // 0 --> The first occurrence of 'pass' is at index 0
console.log(results.indexOf('error')); // 2 --> The first occurrence of 'error' is at index 2
console.log(results.indexOf('not found')); // -1 --> Element not found

console.log("-------------------------------");

// lastIndexOf() method returns the last index of the specified element in the array.
// If the element is not found, it returns -1.

console.log(results.lastIndexOf('fail')); // 3 --> The last occurrence of 'fail' is at index 3
console.log(results.lastIndexOf('pass')); // 4 --> The last occurrence of 'pass' is at index 4
console.log(results.lastIndexOf('error')); // 2 --> The last occurrence of 'error' is at index 2 
console.log(results.lastIndexOf('not found')); // -1 --> Element not found

console.log("-------------------------------");

// includes() method checks if the specified element is present in the array.
console.log(results.includes('fail')); // true --> 'fail' is present in the array
console.log(results.includes('pass')); // true --> 'pass' is present in the array   
console.log(results.includes('error')); // true --> 'error' is present in the array
console.log(results.includes('not found')); // false --> 'not found' is not present in the array

console.log("-------------------------------");

// find() method returns the first element in the array that satisfies the provided testing function.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(num.find(x => x > 5)); // 6 --> The first element greater than 5 is 6
console.log(num.find(x => x < 0)); // undefined --> No element less than 0 is found

console.log("-------------------------------");

// findIndex() method returns the index of the first element in the array that satisfies the provided testing function.

console.log(num.findIndex(x => x > 6)); // 6 --> The index of the first element greater than 6 is 6 (element is 7)
console.log(num.findIndex(x => x < 0)); // -1 --> No element less than 0 is found

console.log("-------------------------------");

//findLast() method returns the last element in the array that satisfies the provided testing function.

console.log(num.findLast(x => x > 5)); // 10 --> The last element greater than 5 is 10
console.log(num.findLast(x => x < 0)); // undefined --> No element less than 0 is found

console.log("-------------------------------");

//findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function.

console.log(num.findLastIndex(x => x > 6)); // 9 --> The index of the last element greater than 6 is 9 (element is 10)
console.log(num.findLastIndex(x => x < 0)); // -1 --> No element less than 0 is found


