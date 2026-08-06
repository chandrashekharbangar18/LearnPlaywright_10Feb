// Type 4 --> 

function greet(name)
{
    return `Hello, ${name}!`;
}
let greeting = greet("Chandra"); 
console.log(greeting); // Output: "Hello, Chandra!"

// For above function -- Fun as Expression is --

const greet1 = function (name)
{
    return `Hello, ${name}!`;
}

console.log(greet1("Chandra"));