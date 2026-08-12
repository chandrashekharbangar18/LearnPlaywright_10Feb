//Ex1
function sum(a,b,c)
{
    return a+b+c ;
}

let num = [1,2,3];
console.log(sum(...num));

// Ex2
function hasError(...codes)
{
    return codes.some(value => value >= 400);
}

let resCode = [200, 201, 403];

console.log(hasError(...resCode));