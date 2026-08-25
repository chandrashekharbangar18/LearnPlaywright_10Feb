// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined

let a = 10;
let b = a;
b = 99;
console.log(a);  // call by value s0 remains unchanged

// objects - > copied by reference i.e. call by ref
// Reference = object, array, function

let obj1 = {val : 10};
let obj2 = obj1;
obj2.val = 44;
console.log(obj1.val);
