// we can crete an empty js objects
let a = { };
console.log(a);
// we can add keys

a.browser = "chrome";
a.timeout = 2000;
a.timeout = 3000;  // use latest one 
console.log(a);

console.log("-----------------");
// we  can delete the key also

delete a.browser;
console.log(a);