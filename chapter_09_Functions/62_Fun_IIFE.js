// IIFE -- Immediately Invoked Function Expression
// They don't need to be called 

// Normal fun
function hi ()
{
    console.log("Hello !!!");
}

hi();

// IIFE
 (function () {

     console.log("Hello !!!");

 }) ();

 // IIFE with Arrow

 (() => {
    console.log("Hello !!!!!");
 }) ();