// Real QA use: In Playwright TypeScript projects, you define interfaces for API response
// If the backend changes a field name from userName to username,
// TypeScript catches every place in your tests that uses the old name - instantly.

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-" + test1.id + ": " + test1.name + " - " + test1.status);

let test2: TestCase = {
    id: 2,
    name: "Login with Invalid credentials",
    status: "Fail",
    duration: 3200
};

console.log("TC-" + test2.id + ": " + test2.name + " - " + test2.status);