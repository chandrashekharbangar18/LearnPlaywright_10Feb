// 1. The API call simulation function (takes 1 second)
function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            // Note: resolve() only accepts ONE argument in JavaScript. 
            // The second argument (" 200 Ok!") will be ignored.
            resolve(name); 
        }, 1000)
    });
}

// 2. The parallel test execution function
async function parallelTest() {
    console.log("Starting of the Test");
    let start = Date.now();

    // Runs all three API calls at the exact same time
    let [r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment Service")
    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
}

// 3. Execute the function
parallelTest();