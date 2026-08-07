// Arrow Functions -->
// If you want to make normal function to arrow function -->
// remove the keyword function, return, curly braces and use equal to arrow like = >

// Ex1
// Normal funtion
const greet = function (fName)
{
    return `Hello, ${fName}!`;
}

console.log(greet("Chandra"));

// Arrow fuction for above example is -->

const greet1 = (fName1) => `Hello, ${fName1}!`;
console.log(greet1("Chandra"));

// No params
const getEnv = () => "staging";
console.log(getEnv());

// Ex

const getResult = (score) => {
    if (score > 40) return "pass"
    else "fail";
}

console.log(getResult(39));

// arrow 