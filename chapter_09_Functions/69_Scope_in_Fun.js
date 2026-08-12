// Scope in Function

// Glogal Scope
// Ex 1

let env = "staging";  // global var

function setEnv()
{
    let timeout = 3000 ; // local var

    console.log(env);  // can access global var

    console.log(timeout);  // can access local var

}
setEnv();
console.log(env); // can access var env because it's a global var
console.log(timeout);  // can't access var timeout because it's a local var to fun setEnv()

// Nested scope

// Ex1
