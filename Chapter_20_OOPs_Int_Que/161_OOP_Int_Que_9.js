// ### **Exercise 4: Method Override with super.method()**

class Base {
  greet() {
    return "Hello";
  }
}

class Child extends Base {
  greet() {
    return super.greet() + " World";
  }
}

console.log(new Child().greet());

// o/p -->
// Hello World
