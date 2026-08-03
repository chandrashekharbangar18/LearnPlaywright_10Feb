// Accessing and Modifying Array 

let status1 = ["Active", "Inactive", "Pending", "Completed"];
console.log(status1[0]); // Active

console.log(status1.at(-1)); // -1 means pointing to last element - Completed
console.log(status1.at(-2)); // -2 means pointing to second last element - Pending
console.log(status1.at(-5)); // undefined - index out of bounds

console.log("---------------------------------------------------");

// Modifying Array

status1[1] = "Blocked"; // Modifying the value at index 1
console.log(status1); // ["Active", "Blocked", "Pending", "Completed"]
console.log(status1.length); // 4 - length of the array remains unchanged

