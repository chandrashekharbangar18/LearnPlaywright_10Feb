// Switch case example with API response
// This example demonstrates the use of switch case statements to handle different API response statuses.

let apiResponseCode = 404;
switch(apiResponseCode) 
{
    case 200:   
        console.log("Success: The request was successful.");
        break;
    case 400:
        console.log("Bad Request: The server could not understand the request.");
        break;
    case 401:
        console.log("Unauthorized: Access is denied due to invalid credentials.");
        break;
    case 403:
        console.log("Forbidden: You do not have permission to access this resource.");
        break;
    case 404:
        console.log("Not Found: The requested resource could not be found.");
        break;
    case 500:
        console.log("Internal Server Error: The server encountered an error.");
        break;
    default:
        console.log("Unknown Status Code: An unexpected status code was received.");
}