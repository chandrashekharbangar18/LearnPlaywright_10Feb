// ==,===,=

let x = 5; // = --> assignment operator
console.log(x); // 5

console.log(5 == 5); // true (same value and same data type)
console.log(5 == "5"); // true (type coercion) --> same value but different data type
console.log(5 === "5"); // false (no type coercion) --> same value but different data type
console.log(5 === 5); // true (same value and same data type)

console.log(5 === 5.0); // true (same value and same data type) --> both are numbers

// == --> loose equality operator  that is tries to convert both side to the same type before making the comparison,
// so it returns true when comparing 5 and "5" because 
// it converts the string "5" to the number 5 before making the comparison.


// === --> strict equality operator (does not perform type coercion)