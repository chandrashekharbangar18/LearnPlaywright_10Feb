// Parent Class
class Animal {
    eat() {
        console.log("This animal eats food.");
    }
}

// Child Class 1 inherits from Animal
class Dog extends Animal {
    bark() {
        console.log("The dog barks.");
        console.log("----------------------------------------");
    }
}

// Child Class 2 also inherits from Animal (Hierarchical)
class Cat extends Animal {
    meow() {
        console.log("The cat meows.");
        console.log("----------------------------------------");
    }
}

// Execution
const myDog = new Dog();
const myCat = new Cat();

myDog.eat();  // Inherited from Animal
myDog.bark(); // Unique to Dog

myCat.eat();  // Inherited from Animal
myCat.meow(); // Unique to Cat