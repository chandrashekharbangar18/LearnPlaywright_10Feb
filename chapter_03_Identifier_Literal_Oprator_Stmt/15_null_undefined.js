console.log(null === null); // true
console.log(null == null); // true  

console.log(null == undefined); // true
console.log(null === undefined); // false 
// strict equality operator (===) does not perform 
// type coercion, so it returns false when comparing null and undefined

console.log(null==0); // false
console.log(null==""); // false
console.log(null==false); // false

console.log(undefined == 0); // false
console.log(undefined == ""); // false
console.log(undefined == false); // false