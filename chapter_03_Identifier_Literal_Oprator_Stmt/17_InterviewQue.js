0 == 0; // true
0 == ""; // true (type coercion)
0 == "0"; // true (type coercion)
0 === "0"; // false (no type coercion)
0 == false; // true (type coercion)
0 === false; // false (no type coercion)

// Explanation: 
// The '==' operator performs type coercion, which means it converts the operands to the same type before
// making the comparison.
// In the first case, 0 is equal to 0, so it returns true.
// In the second case, 0 is coerced to an empty string, which is considered falsy, so it returns true.


// Rule Breaking Example:
null == undefined; // true (type coercion)
null === undefined; // false (no type coercion) 
null == 0; // false (type coercion)
null == ""; // false (type coercion)
null == false; // false (type coercion)

undefined == null; // true (type coercion)
undefined === null; // false (no type coercion)
undefined == 0; // false (type coercion)
undefined == ""; // false (type coercion)
undefined == false; // false (type coercion)

NaN == NaN; // false (NaN is not equal to anything, including itself)
NaN === NaN; // false (same reason as above)

console.log(0 == 0); // true
console.log("" == 0); // true
console.log("0" == 0); // true
console.log("0" === 0); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log(null == undefined); // true
console.log(null === undefined);    // false

