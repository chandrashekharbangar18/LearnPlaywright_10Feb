// 1. What is the output?
let str = "  PASS  ";
console.log(str.trim().toLowerCase());  //pass

// 2. What does follwing return
console.log("pass,fail,skip".split(",").length); // 3

// 3. What is the output?
let str1 = "hello";
str1[0] = "H";
console.log(str1);  // hello

// 4. Which correctly extracts `"staging"` from this URL?
let url = "https://staging.example.com";
console.log(url.slice(8, 15));
console.log(url.split("://")[1].split(".")[0]);

// 5. What does this return?
console.log("Error: 404 Not Found".match(/\d+/g));  // [ '404' ]


// 6. Validate URL contains expected environment

let url1 = "https://staging.myapp.com/dashboard";
console.log(url1.includes("staging"));  // true
console.log(url1.startsWith("https"));  // true
console.log(url1.endsWith("/dashboard"));   // true

// 7.
let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status1 = log.match(/Status: (\d+)/)[1];

console.log(status1) ;  // 500

// 8.
let env = "staging"; 
let module = "auth"; 
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId); // Output: "staging_auth_007"

// 9.
let actual = " PASS "; 
let expected = "pass"; 
actual.trim().toLowerCase() === expected;
console.log(actual.trim().toLowerCase() === expected); // Output: true

//// 10. Parsing query parameters from URL

let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
console.log(params); // Output: { query: "login", page: "2", sort: "asc" }

// 11. Masking sensitive information in logs

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked); // Output: "Bearer ***REDACTED***"