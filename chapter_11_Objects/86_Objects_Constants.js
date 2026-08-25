const user = {
    name : "Shree",
    age : 22,
    mob : 1209767890,
    email : "abc@abc.com"
};
console.log(user);

// accessing objs properties
console.log(user.name);
// or
console.log(user["name"]);
console.log(user["mob"]);

// dynamic property access
const key1 = "email";
console.log(user[key1]);

const key2 = "age";
console.log(user[key2]);

// Adding or Modifying properties
user.city = "NYC";  // adding new property
user.age = 55 ;
console.log(user);  // modifying property