// Base class (Parent)
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(this.brand + " engine started.");
    }
}

// Child class 1 inherits from Vehicle
class Car extends Vehicle {
    drive() {
        console.log(this.brand + " is driving on roads.");
        console.log("----------------------------------------");
    }
}

// Child class 2 also inherits from Vehicle (Hierarchical Inheritance)
class Boat extends Vehicle {
    sail() {
        console.log(this.brand + " is sailing on water.");
        console.log("----------------------------------------");
    }
}

// Execution
const myCar = new Car("Toyota");
const myBoat = new Boat("Yamaha");

myCar.start(); // Inherited method
myCar.drive(); // Child specific method

myBoat.start(); // Inherited method
myBoat.sail();  // Child specific method