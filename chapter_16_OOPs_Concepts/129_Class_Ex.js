class car{
    // Attribute
    // Constructor

    constructor(name)
    {
        this.name = name;
    }

    // Behaviors
    drive() {
        console.log("Driving the car", this.name);
    }
    carDetails() {
        console.log("Car details:", this.name);
    }
}

let tesla = new car("Tesla");
tesla.drive();
tesla.carDetails();