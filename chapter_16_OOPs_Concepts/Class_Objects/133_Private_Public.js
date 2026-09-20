// Private Fields (#) - Hidden Data

class Credentials {
    // 1. Declare the private field using the '#' prefix. 
    // This must be declared outside the constructor before it can be used.
    #apikey;

    constructor(user, key) {
        // 2. This is a public property. Anyone can read or modify it outside the class.
        this.user = user; 
        
        // 3. Assign the value to the private field. It can only be accessed inside this class.
        this.#apikey = key;
    }
    
    // 4. This public method has internal access to the private field.
    getAuthHeader() {
        return "Bearer " + this.#apikey;
    }
}

// ---- Testing the code ----

// Create a new instance of the Credentials class
let cred = new Credentials("admin", "#scret_key_1234");

// Logs: "admin" (Works perfectly because 'user' is public)
console.log(cred.user);
// console.log(cred.apiKey); 
// console.log(cred.#apiKey);
// Logs: undefined (JavaScript looks for a public property named 'apiKey', which does not exist)
// Throws a SyntaxError! (Private fields cannot be accessed directly outside the class body)


// If we want to get the api key then we can use the public method getAuthHeader()
//  which has access to the private field.

console.log(cred.getAuthHeader()); // Logs: "Bearer #scret_key_1234"    