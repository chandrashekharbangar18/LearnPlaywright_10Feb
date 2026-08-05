// EX1
let [first,second,third] = [1, 2, 3];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

console.log('-----------------------------------------------------');

// EX2
let [a, b, ...c] = [1, 2, 3, 4, 5]; // ...c --> rest operator - collects the remaining elements of the array into a new array
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: [3, 4, 5]

// EX3

let a = [1,2,3];
let b = a;
b.push(4);
console.log(a.length); 
// Output: 4 - a and b are referencing the same array in memory, so modifying b also modifies a


// EX4
let codes = [200, 201, 100, 400];
console.log(codes.some(value => value >= 400)); // Output: true - checks if at least one element in the array is greater than or equal to 400   