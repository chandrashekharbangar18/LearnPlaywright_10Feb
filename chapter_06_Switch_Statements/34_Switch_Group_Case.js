// Switch group case example
// This example demonstrates the use of switch case statements to group multiple cases together.

let fruit = "apple";

switch(fruit)
{
    case "apple":
    case "banana":  
    case "orange":
        console.log("This is a common fruit.");
        break;  
    case "kiwi":    
    case "mango":
        console.log("This is a tropical fruit.");
        break;
    default:
        console.log("Unknown fruit.");
}