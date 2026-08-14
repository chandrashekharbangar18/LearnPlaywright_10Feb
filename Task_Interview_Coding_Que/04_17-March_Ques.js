// Ex1. What is the output?

console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}

// Ex2. What is the output?
console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";
// Ans - Error

// Ex3. What does this function return?
function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();
// Ans- null 

// Ex4. What is the output?
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());
// Ans --> 3

// Ex5 What is the output?
function test(...args) {
  return args.length;
}
console.log(test("login", "pass", 200, true));
// Ans --> 4

// Ex6 What is the output?
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());
// Ans --> undefined

// Ex7 What does this return?
function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
console.log([1, 2, 3].map(double).map(addOne));
// Ans --> [3,5,7]

// Ex 8 What is the output?
function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));
// Ans --> Running: Login

// Ex 9 What is the output?
function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());
// Ans --> 30