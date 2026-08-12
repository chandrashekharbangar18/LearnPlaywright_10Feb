// Hoisting --> Fun ceclaration are hoisted -->
// We can call them before they are defined
// Fun exp. and arroe funs. are not

// Ex 1

console.log(greet("Hello !!!"));  // Hoisted allowe before defn.

function greet(name)
{
    return `Hi... ${name}`
}

// Ex2 -- Not Allowed

sayHi("Hello !!!");  //  Cannot access 'sayHi' before initialization
const sayHi = function(name)
{
    return `Hi... ${name}`
}  