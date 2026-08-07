// Ex1 return value 
function getStatus(code)
{
    if(code >=200 && code <300) return "success";
    if(code >=400 && code <500) return "client error";
    if(code >=500) return "server error";
}

console.log(getStatus(200));
console.log(getStatus(401));
console.log(getStatus(503));

// Ex2
function logTest(name)
{
    console.log(`Running: ${name}`);
    // no return stmt
}
let result = logTest("Login");
console.log(result);

// Ex3
greet("Roger");
// console.log(greet("Roger"));
function greet(name)
{
    return `Hello ${name}`
}