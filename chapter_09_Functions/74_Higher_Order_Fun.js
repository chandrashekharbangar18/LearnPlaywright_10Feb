// Higher-order Fun -->
// A Fun that takes a fun as argument  or returns a fun

// Ex1
function runWithLogging(testfn, testName)
{
    console.log(`Starting : ${testName}`);
    let result = testfn ();
    console.log(`Finished : ${testName} -> ${result}`);
    return result;
}
function loginTest()
{
    return "pass";
}

function loginTestFailed()
{
    return "fail";
}

runWithLogging(loginTest, "Login Test");
runWithLogging(loginTestFailed, "Dashboard Failed Test");

// Ex2
