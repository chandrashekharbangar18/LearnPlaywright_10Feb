if([])
{
    console.log("True");
}
// Output: True --> An empty array is an object and is considered truthy in JavaScript.

if({})
{
    console.log("True");
}
// Output: True --> An empty object is considered truthy in JavaScript.

if("")
{
    console.log("True");
}
// No output

if(0)
{
    console.log("True");
}
// No output

// case 1

let response;
if(response)
{
    
}

// case 2
if(response !== null)
{

}

// explaining case 1 and case 2

// In case 1, we are checking if the variable 'response' is truthy. Since 'response' is undefined, 
// it is considered falsy, and the code block will not execute.


// In case 2, we are explicitly checking if 'response' is not equal to null. Since 'response' is undefined,
// it is not equal to null, and the code block will execute. This is a more specific check to ensure that 'response' 
// is not null, but it does not account for other falsy values like undefined, 0, or an empty string.