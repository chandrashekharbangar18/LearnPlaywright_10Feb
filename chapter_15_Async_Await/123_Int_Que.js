// EX 1
// can we call async function with then () ? --> Yes, but it's not the preferred way

async function sayHello() {
    return "Hello, QA!";
}

sayHello().then(function (msg) {
    console.log(msg);
});

// output --> Hello, QA! 


// EX2
async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code:", status);
}

getStatus();

// o/p --> Status code: 200

// EX 3
async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified dashboard");
    console.log(step3);
}

testFlow();

// o/p --> 
// Opened browser
// Clicked login
// Verified dashboard

// EX 4
async function riskyTest() {
    try {
        let data = await Promise.reject("Element not found");
        console.log(data);
    } catch (err) {
        console.log("Test failed:", err);
    }
}

riskyTest();

// o/p --> Test failed: Element not found

// EX 5
async function apiTest() {
    try {
        let response = await Promise.resolve({ status: 201, body: "Created" });
        console.log("Status:", response.status);
        console.log("Body:", response.body);
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Test complete");
    }
}

apiTest();

// o/p --> 
// Status: 201
// Body: Created
// Test complete

// EX 6
console.log("A");

async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

test();
console.log("D");

// o/p -->
// A
// B
// D
// C

// Ex 7

async function runAll() {
    let [a, b, c] = await Promise.all([
        Promise.resolve("Login: OK"),
        Promise.resolve("Cart: OK"),
        Promise.resolve("Checkout: OK")
    ]);

    console.log(a);
    console.log(b);
    console.log(c);
}

runAll();

// o/p --> parallel run
// Login: OK
// Cart: OK
// Checkout: OK

// Ex 8
async function healthCheck() {
    let results = await Promise.allSettled([
        Promise.resolve("Auth: UP"),
        Promise.reject("DB: DOWN"),
        Promise.resolve("Cache: UP")
    ]);

    results.forEach(function (r) {
        let status = r.status === "fulfilled" ? "✅" : "❌";
        let msg = r.value || r.reason;
        console.log(status + " " + msg);
    });
}

healthCheck();

// o/p -->
// ✅ Auth: UP
// ❌ DB: DOWN
// ✅ Cache: UP

// Ex 9

async function checkEndpoints() {
    let endpoints = ["/login", "/users", "/orders"];

    for (let i = 0; i < endpoints.length; i++) {
        let result = await Promise.resolve(endpoints[i] + " - 200");
        console.log(result);
    }

    console.log("All checks done");
}

checkEndpoints();

// o/p --> 
// /login - 200
// /users - 200
// /orders - 200
// All checks done

// Ex 10
// Async IIFE(Immediately Invoked)

(async function () {
    let msg = await Promise.resolve("Quick async test");
    console.log(msg);
})();

console.log("Outside");

// o/p -->
// Outside
// Quick async test

// Ex 11
async function add(a, b) {
    return a + b;
}

async function main() {
    let result = await add(10, 20);
    console.log("Sum:", result);

    let result2 = await add(result, 30);
    console.log("Total:", result2);
}

main();

// o/p -->
// Sum: 30
// Total: 60