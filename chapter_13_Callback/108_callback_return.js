// 1. The main function captures what the callback RETURNS
function processNumber(num, callback) {
    let result = callback(num); // Captures the returned value
    console.log("Final Result: " + result);
}

// 2. Call the function and RETURN a value inside the callback
processNumber(5, function (x) {
    return x * 2; // Returns 10 back to the main function
});


console.log("----------------------------------");
// EX2

// 1. The main function accepts text and a formatting callback
function prepareMessage(text, formatCallback) {
    let formattedText = formatCallback(text); // Captures the returned value
    console.log("Sending: " + formattedText);
}

// 2. We pass a callback that returns the text in UPPERCASE
prepareMessage("hello world", function(msg) {
    return msg.toUpperCase(); 
});

console.log("----------------------------------");
// EX3

function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);   