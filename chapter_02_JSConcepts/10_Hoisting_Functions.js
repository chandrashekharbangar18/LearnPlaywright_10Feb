// Function Hoisting
// Ex. 1

function getUSerStatus() {

    console.log(userID);
    var userID = "sh123";
    console.log(userID);
}
getUSerStatus();