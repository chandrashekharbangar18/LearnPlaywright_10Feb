class Person {
    // 1. Declare private fields using '#' prefix to hide child data.
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        // 2. Public property: accessible anywhere outside the class.
        this.name = name;
        
        // 3. Private properties: initialized within the constructor.
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    // 4. Getter-like method: exposes access to the private field #child1 safely.
    mom() {
        return this.#child1;
    }
}

// 5. Creating a new instance of the Person class
let p = new Person("Pramod", "Vrad", "Jenny");

// 6. Execution output tests
console.log(p.name);      // Logs: "Pramod" (Public property is accessible)
// console.log(p.#child1); // Throws a SyntaxError! (Cannot access private fields outside the class)
console.log(p.mom());     // Logs: "Vrad" (Method safely reads the private field)

console.log(p.mom());     // Logs: "Vrad" (Method safely reads the private field)

// or by using get set methods, we can access the private fields of the class.

