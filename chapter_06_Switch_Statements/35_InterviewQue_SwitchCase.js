let testScore = 85;

switch (true) {
    case (testScore >= 95):
        console.log("You got an A!");
        break;
    case (testScore >= 85):
        console.log("You got a B!");
        break;
    case (testScore >= 70):
        console.log("You got a C!");
        break;  
    case (testScore >= 60):
        console.log("You got a D!");
        break;  
    default:
        console.log("You got an F!");
}