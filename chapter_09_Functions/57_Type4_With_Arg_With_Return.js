// Type 4 Function --> With input parameters and with return value
// Ex1

function getMyFullName(fname, lname)
{
    return (fname + " " + lname);
}

let myFullName = getMyFullName("Chandrashekhar", "Bangar");
console.log("My Full Name is ==> ", myFullName); // Output: "My Full Name is: Chandrashekhar Bangar"

// Ex2

function productOfTwoNum(a, b)
{
    return (a * b);
}
let product = productOfTwoNum(10, 20);
let product1 = productOfTwoNum(4, 20);
console.log("Product of two numbers is ==> ", product); // Output: "Product of two numbers is: 200"
console.log("Product of two numbers is ==> ", product1); // Output: "Product of two numbers is: 80"   