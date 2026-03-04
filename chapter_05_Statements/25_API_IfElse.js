let statusCode = 404;

if (statusCode == 200) {
    console.log("OK - The request has succeeded...");
} else if (statusCode == 404) {
    console.log("Error: " + statusCode);
} else {
    console.log("Unexpected status code: " + statusCode);
}
// Output: Error: 404