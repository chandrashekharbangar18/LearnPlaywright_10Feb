// Ternary Operator
// Syntax: condition ? expression1 : expression2

// Example 1: Basic Usage
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

// Example 2: Nested Ternary Operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // Output: B

// Example 3: Ternary Operator with Functions
function getStatus(isOnline) {
    return isOnline ? "User is online." : "User is offline.";
}
console.log(getStatus(true)); // Output: User is online.
console.log(getStatus(false)); // Output: User is offline.  


