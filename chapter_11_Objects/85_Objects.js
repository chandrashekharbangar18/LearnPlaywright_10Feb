// Objects --> key-value pair

let student1 = {Name : "Suresh", Age : 21};
let student2 = {Name : "Ramesh", Age : 22};
let student3 = {Name : "Yuresh", Age : 23, mob : 8965431200};
console.log("Name : ", student1.Name, "Age : ", student1.Age);

let a = {status : "pass"};
console.log(a.status);
console.log(a["status"]);

// Int que
// let a1 = {status id : "pass"}; // invalid --> space should not be there//

// key is case sensitive
// ex

let a1 = {status : "pass", Status : "fail"};
console.log(a1.status);
console.log(a1.Status);

// Whenever we assign one obj to another obj, it will always copy the reference
// Ex
let x = {status : "pass"};
console.log(x.status);
let y = x; 
y.status = "fail";
console.log(x.status);


// Two seperate objects - different memory locations
// Ex

let c = {status : "pass"};
let d = {status : "pass"};
console.log(c==d);  // false
console.log(c===d)  // false