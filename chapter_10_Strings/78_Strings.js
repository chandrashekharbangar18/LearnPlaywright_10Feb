// Strings
let url = "https://www.google.com/";
let status = 'pass';
let msg = `Test is passed in ${2}min`; // template literal

// single quote
let a = "Hello" ;

// double quote
let b = "World !!!" ; 

// template literal
let name = "Ramesh";
let msg1 = `Hello ${name} !  Addition is ==> ${10 + 20}`;
console.log(msg1);

// Multiline String
let report = `
Test : Login
Status : Pass
Duration : 320 ms
`;

// string() constructor - converts other types
console.log(String(200));
console.log(true);
console.log(null);
console.log([1,2]);