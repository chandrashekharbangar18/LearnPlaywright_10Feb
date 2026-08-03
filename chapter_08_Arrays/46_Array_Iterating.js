// Iterate --> Go from one element to another element in an array    
 
let test  = ['login', 'logout', 'error', 'search'];
for(let i=0; i<test.length; i++)
{
    console.log(test[i]); // Accessing each element in the array using index
}

console.log("-------------------------------");

// for of loop --> Iterates over the values of an iterable object (like an array)
for(let value of test)
{
    console.log(value); // Accessing each element in the array directly
}

console.log("-------------------------------");

// forEach loop --> return element of an array along with index
test.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`); // Accessing each element in the array along with its index
});   

console.log("-------------------------------");

// entries() method --> returns index and value of an array
for(let [i,value] of test.entries())
{
   // console.log(`Index: ${i}, Value: ${value}`);
    console.log(i, value);
}

console.log("-------------------------------");

// for in loop --> gives index of an array
let name = ['John', 'Doe', 'Smith', 'Jane'];
for(let index in name)
{
   // console.log(`Index: ${index}, Value: ${name[index]}`);
    console.log(index, name[index]);
}

console.log("-------------------------------");
// The basic diff bet For of and For in loop -->
// for of loop --> gives value of an array
// for in loop --> gives index of an array