function outer ()
{
    let msg = "Hello !!!";
    console.log("Outer Called...");

    function inner ()
    {
        console.log(msg);
    }
    return inner;
}
let fn_inner = outer();
fn_inner();





