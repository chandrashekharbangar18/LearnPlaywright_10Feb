// Switch uses strict equality (===) for comparison, which means that the value 
// and type must match for a case to be executed.

// Ex1
let value = "10";
switch(value){

    case 10:
        console.log("Number 10");
        break;

    case "10":
        console.log("String 10");
        break;
    default:
        console.log("Value is not 10");
}

//output --> String 10

// In this example, the switch statement compares the variable 'value' with the case labels. 
// Since 'value' is a string "10" and the first case label is a number 10, it does not match. 
// However, the second case label is a string "10", which matches the value of 'value', 
// so the code inside that case block is executed, logging "String 10" to the console.


// Ex2

let status = 0;
switch(status){

    case false:
        console.log("Status is false");
        break;
    case 0:
        console.log("Status is 0");
        break;
    default:
        console.log("Status is neither false nor 0");
}

// output --> Status is 0 --> (0===0) is true, but (0===false) is false

// In this example, the switch statement compares the variable 'status' with the case labels. 
// The first case label is false, which does not match the value of 'status' (0). 
// The second case label is 0, which matches the value of 'status', so the code inside that case block is executed, 
// logging "Status is 0" to the console.