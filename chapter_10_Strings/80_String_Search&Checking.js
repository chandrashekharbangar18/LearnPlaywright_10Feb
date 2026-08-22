let url = "https://mail.google.com/mail/u/0/#inbox";

console.log(url.includes("com"));     // T
console.log(url.includes("goog"));    // T
console.log(url.includes("cricket"));  // F

console.log(url.startsWith("http://"));  // F
console.log(url.endsWith("/"));  // T

// indexOf(), lastIndexOf()
console.log(url.indexOf("o"));
console.log(url.lastIndexOf("o"));
console.log(url.lastIndexOf("m"));

console.log(url.indexOf("the"));

// search()
console.log(url.search(/mail/));




