class Student {
    // 1. Static property: Belongs to the class itself, not to individual instances.
    static collegeName = "PW AT Batch";

    constructor(name) {
        // 2. Instance property: Each student object gets its own unique 'name'.
        this.name = name;
    }

    // 3. Static method: Belongs to the class. 
    // WARNING: 'this.name' inside a static method refers to the class name ("Student"), 
    // NOT the individual student's name (like "amit").
    static display() {
        console.log(this.name + " are part of the ", Student.collegeName);
    }
}

// 4. Creating instances of the Student class
let amit = new Student("amit");
let miti_jha = new Student("miti_jha");
let sumu = new Student("sumu");
let padmini = new Student("padmini");

// 5. Printing outputs to the console
console.log(Student.collegeName); // Logs: "PW AT Batch"
console.log(amit.name);           // Logs: "amit"
console.log(miti_jha.name);       // Logs: "miti_jha"
