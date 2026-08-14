// Callback Fun --> 
// A callback is a function, passed as an argument to another function, to be called later
// Ex 

function runTest(testName, callback)
{
    let result = "Pass";
    // 100 lines of code
    callback(testName, result);
}

function onComplete(name, result)
{
    console.log(`${name} finished with : ${result}`);
}
runTest("Login Test", onComplete);