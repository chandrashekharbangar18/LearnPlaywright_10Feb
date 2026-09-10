// Ex2

function sayGoodbye() {
    console.log("3. Goodbye! (Happens last)");
}

// Function 2: The tool that handles the waiting
function waitTwoSeconds(callbackFunction) {
    // Simulate a 2-second delay, then run the callback
    setTimeout(callbackFunction, 2000);
}

// Function 3: The main program that starts everything
function startProgram() {
    console.log("1. Hello! (Happens first)");
    
    // Pass Function 1 into Function 2
    waitTwoSeconds(sayGoodbye); 
    
    console.log("2. Waiting... (Happens instantly)");
}

// Run the program
startProgram();