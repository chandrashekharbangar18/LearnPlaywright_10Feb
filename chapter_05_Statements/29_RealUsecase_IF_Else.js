function validateUserInput(userName, password) {
    if (userName === "Admin" && password === "1234") {
        return "Login successful";
    } else {
        return "Login failed";
    }   
}

// Example usage:
// let userName = "Admin";
// let password = "1234";
// console.log(validateUserInput(userName, password)); // Output: Login successful

userName = "User";
password = "wrongpassword";
console.log(validateUserInput(userName, password)); // Output: Login failed 
