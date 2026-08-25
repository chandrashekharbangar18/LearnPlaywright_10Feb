const user = { 
  firstName : "Chandra", 
  lastName : "Bangar", 
  
  get fullName() { 
    return `${this.firstName} ${this.lastName}`; // Fixed: returns the value
  }, 
  
  set fullName(value) { 
    [ this.firstName, this.lastName ] = value.split(" "); 
  } 
};

console.log(user.fullName); // Output: "Chandra Bangar"
user.fullName = "Amit Sharma";
console.log(user.fullName); // Output: "Amit Sharma"