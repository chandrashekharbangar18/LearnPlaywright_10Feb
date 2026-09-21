function sayHello(msg: string) : void
{
    console.log(msg);
}

// Fun annotations

function greet (name : string) : string
{
    return `Hello ${name} !!!` ;
}

// never -- fun never returns (throws or infinite loop)
function throwError(msg : string) : never
{
    throw new Error(msg);
}

function infiniteLoop() : never
{
    while(true)  { }
}