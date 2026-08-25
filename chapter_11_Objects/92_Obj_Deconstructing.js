

const user = {
    name1 : "John",
    age : 30,
    city : "Delhi"
};
// Basic destructuring

const { name1, age } = user ;
console.log(name1);
console.log(age);

//Rename variables 
const { name1 : userName, age : userAge} = user ;
console.log(userName);
console.log(userAge);
