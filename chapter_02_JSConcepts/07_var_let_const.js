// Difference between var, let and const in JavaScript

// 1. var is function-scoped, while let and const are block-scoped.
// 2. var can be re-declared and updated, while let can be updated but not re-declared, and const cannot be updated or re-declared.
// 3. var variables are hoisted to the top of their scope and initialized with undefined, while let and const variables are hoisted but not initialized.

// Example of var

var x = 10;  // var variable
console.log(x);  // Output: 10
var x = 20;  // Re-declaring var variable
console.log(x);  // Output: 20

var y = 30; // global scoped variable
function testVar()  // Defining a function to test var variable
{  
    var y = 40; // function scoped variable or local variable for testVar function
    console.log(y); // Output: 40
}   
testVar();  // Calling the function to test var variable
console.log(y); // Output: 30

// Ex2
function testPrintHello()
{
    console.log("Hello"); 
    var a = 10; 
    console.log(a);
    if(true)
    {
        var a = 20; // var variable is function scoped, so it will update the value of a in the entire function
        console.log(a); // Output: 20
    }
    console.log(a); // Output: 20, because var variable is function scoped, 
                    // so it will update the value of a in the entire function
}
testPrintHello(); // Output: Hello, 10, 20, 20
// var also allows redeclaration
var a = 100; // Re-declaring var variable
console.log(a); // Output: 100

//2. Let
// let is block-scoped, so it is only accessible within the block it is defined in.

let b = 10;
console.log(b); // Output: 10
// let b = 20; // Error: Identifier 'b' has already been declared, because let does not allow redeclaration
b = 20; // Updating the value of b
console.log("Let value is: ", b); // Output: 20

let c = 30; // global scoped variable
console.log(c); // Output: 30

function testLet()  // Defining a function to test let variable
{
    let c = 40; // block scoped variable or local variable for testLet function
    console.log(c); // Output: 40
    if(true)    
    {
        let c = 50; // block scoped variable for if block
        console.log(c); // Output: 50
    }
}

testLet(); // Calling the function to test let variable

// let c = 60; // Re-declaring let variable, this will throw an error because let does not allow redeclaration

console.log(c); // Output: 30, because let variable is block scoped, so it will not update the value of c in the entire function

// Let also does not allow redeclaration
// Ex 
let a= 500;
console.log(a); // Output: 500
// let a=600; // Error: Identifier 'a' has already been declared, because let does not allow redeclaration
a=333; // Updating the value of a
console.log(a); // Output: 333

// 3. const is also block-scoped, but it cannot be updated or re-declared. 
// It must be initialized at the time of declaration.   

// Ex
const pi = 3.142 ; // const variable
console.log(pi); // Output: 3.142
// pi = 3.14; // Error: Assignment to constant variable, because const variable cannot be updated
// const pi = 3.1464646; // Error: Identifier 'pi' has already been declared, because const variable cannot be re-declared//

// var VS let VS const
// var is function-scoped, while let and const are block-scoped, allows redeclaration and updating.
// let can be updated but not re-declared, does not allow redeclaration but allows updating.
// const cannot be updated or re-declared, must be initialized at the time of declaration.