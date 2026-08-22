// Transforming string

let str = "  HeLLo wORld, I aM doING GooD  ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//trim () --> trim whitespaces
console.log(str.trim()); 
console.log(str.trimStart()); 
console.log(str.trimEnd()); 

// replace
let msg = "Test : Pass, Retry : Fail, Res : Pass"; 

console.log(msg.replace("Pass", "skip"));
console.log(msg.replaceAll("Pass", "skip"));

console.log(msg.replace(/Fail/g, "Pass"));

// Concatination()
console.log("Hello" + " " + "World!!!")
console.log("Hello".concat(" ", "Hi !!!"))
console.log(`${"abc"} ${"pqr"}`);

// splitting & joining

console.log("pass,fail,skip".split(","));   // [ 'pass', 'fail', 'skip' ]
console.log("hello".split());           // [ 'hello' ]
console.log("hello".split(""));         // [ 'h', 'e', 'l', 'l', 'o' ]

console.log("test_login_pass".split("_").join(" "));  // test login pass

// Template Literal (joining with format)

let parts = ["2026","08","22"]
let date = parts.join("-");
console.log(date);      // 2026-08-22

