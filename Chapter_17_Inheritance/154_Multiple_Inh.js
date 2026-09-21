// ## Multiple Inheritance -> JavaScript Does NOT Support It Directly
// class C extends A, B { }  // ❌ SyntaxError
// class Son extends F1, F2 {

// }

// But we can achieve it using Mixins example:

// Mixin concept can help you to perform the multiple inheritance.

// Mixin 1: Adds logging ability
let LoggerMixin = function (Base) {
    return class extends Base {
        log(msg) {
            console.log("[Log] " + msg);
        }
    }
}

// Mixin 2: Adds screenshot ability
let ScreenshotMixin = function (Base) {
    return class extends Base {
        takeScreenshot() {
            console.log("[SCREENSHOT] captured");
        }
    };
};

// Base class
class TestCase {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log("Running: " + this.name);
    }
}

// Apply BOTH mixins
class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)) {
    constructor(name) {
        super(name);
    }
}

let t = new SmartTest("Login Flow");
t.run();
t.log("Test started");
t.takeScreenshot();

