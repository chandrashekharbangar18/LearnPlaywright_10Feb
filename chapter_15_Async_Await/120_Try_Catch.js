// Error Handling - Try / Catch

async function testAPI() {
    try {
        let result = await Promise.reject("503 Service Unavailable");
        console.log("Result: ", result);

    } catch (error) {
        console.log("Error --> ", error);
    } finally {
        console.log("Clean Up !!!!");
    }
}

testAPI();

// reject("503 Service Unavailable") will throw an error, which will be caught by the catch block. 
// The catch block will log the error message, and the finally block will execute 
// regardless of whether an error occurred or not, logging "Clean Up !!!!".