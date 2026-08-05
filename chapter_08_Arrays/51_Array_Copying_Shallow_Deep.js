let original = [1, 2, 3, 4, 5];
let copy1 = [...original]; // Shallow copy using spread operator
console.log(copy1); // Output: [1, 2, 3, 4, 5] - creates a shallow copy of the original array

let copy2 = original.slice(); // Shallow copy using slice method
console.log(copy2); // Output: [1, 2, 3, 4, 5] - creates a shallow copy of the original array

let copy3 = Array.from(original); // Shallow copy using Array.from method
console.log(copy3); // Output: [1, 2, 3, 4, 5] - creates a shallow copy of the original array 

let copy4 = original.concat(); // Shallow copy using concat method
console.log(copy4); // Output: [1, 2, 3, 4, 5] - creates a shallow copy of the original array

console.log('-----------------------------------------------------');

// Modifying the shallow copy
copy1.push(60); // Modifying the shallow copy
console.log(original); // Output: [1, 2, 3, 4, 5] - original array remains unchanged
console.log(copy1); // Output: [1, 2, 3, 4, 5, 60] - shallow copy is modified

// Deep Copying -  original also changes when we modify the copy because they share the same reference in memory
// Example of deep copying using JSON methods
 
original.push(70); // Modifying the original array
console.log(original);
console.log(copy1); // Output: [1, 2, 3, 4, 5, 60] - shallow copy remains unchanged
