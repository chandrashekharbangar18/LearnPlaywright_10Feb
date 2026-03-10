// Ex1
switch(x)
{
    case a:
        let b1 = 1;
        break;
    case a:
        let b2 = 1;
        break;   
}
// This code will throw an error because the variable 'b1' is declared in the first case block and is not accessible in the second case block.
// To fix this error, you can either declare the variable 'b1' outside of the switch statement or use different variable names for each case block.

// Ex2
let x=10;
switch(x)
{
    case 10:
        let b3 = 1;
        console.log(b3); // This will log 1 to the console
        break;
    case 10:
        let b4 = 1;
        break;   
}

// JS allows duplicate case labels in a switch statement, but it will only execute the first matching case. 

// In this example, the first case with the value 10 will be executed, and the second case with the same value 
// will be ignored. Therefore, the variable 'b3' will be declared and logged to the console, 
// while 'b4' will not be declared or executed. 
