// ### **Exercise 2: super() Calls Parent Constructor**

class Vehicle {
  constructor(type) {
    this.type = type;
    console.log("Vehicle: " + type);
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car");
    this.brand = brand;
    console.log("Brand: " + brand);
  }
}

let c = new Car("Tesla");

// o/p -->
// Vehicle: Car
// Brand: Tesla