// Ex 1
function getStatus(code)
{
    if(code >=200 && code <300) return "success";
    if(code >=400 && code <500) return "client error";
    if(code >=500) return "server error";
}

console.log(getStatus(200));
console.log(getStatus(401));
console.log(getStatus(503));

// return multiple value via array / object

// Ex 2

function aaa ()
{
    return [1,2,3,4,5]; 
}
console.log(aaa());