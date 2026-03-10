// Do While Loop

// Syntax
// do {
//   // code to be executed
// } while (condition);

// Example 1: Print numbers from 1 to 5

let i = 1;  // Initialization
do {
  console.log(i);
    i++; // Incrementing i to avoid infinite loop
} while (i <= 5);  // Condition

// Ex2

let retry=0;
do {
  console.log("Execute the Code");
  console.log("Retry count: " + retry);
    retry++;
} while (retry < 3); // Condition to retry the code block 3 times