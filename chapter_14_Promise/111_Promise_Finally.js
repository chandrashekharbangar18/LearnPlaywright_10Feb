let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");

});

testRun.then(function (msg) { // Resolve
    console.log(msg);
}).catch(function (error) { // Reject
    console.log(error);
}).finally(function () { // Always Executed!
    console.log("I will be executed anyhow!!");
});