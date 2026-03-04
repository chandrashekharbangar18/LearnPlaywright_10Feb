let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Admin! You have full access.");
    } else if (userRole === "editor") {
        console.log("Welcome, Editor! You can edit content.");
    } else {
        console.log("Welcome, User! You have limited access.");
    }
}
else {
    console.log("Please log in to access the system.");
}