const config = {
    browser : "chrome",
    timeout : 3000
}
console.log(config);
console.log("--------------------");

// Modifying / Adding properties == allowed  

config.browser = "firefox";
config.timeout = 5000;
config.retries = 3;
console.log(config);

// config = {browser : "Safari"}; // Re-assignment to constant variable - Not Allowed
// console.log(config);

console.log("--------------------");


// Let -- can reassign
let a = {
    name: "abc",
    age : 33
}
a.mob = 9865449080;
console.log(a);

a = {name : "pqr"};  // Re-assignment to let variable -  Allowed
console.log(a);

// So avoid using let in case of Objects
