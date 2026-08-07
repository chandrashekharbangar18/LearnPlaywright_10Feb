// Ex1
function runTest(name, status, duration)
{
    return `${name}: ${status} (${duration}ms)`;
}
let res = runTest("Login", "pass", 320);
console.log(res);