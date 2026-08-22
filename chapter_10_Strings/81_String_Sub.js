// Extracting substrings

let str = "Login_Test_Pass_01";

//slice(start,end) --> here (end = end-1)

console.log(str.slice(0,4)); // Logi

console.log(str.slice(10));  // _Pass_01  --> from 11th index onwards
console.log(str.slice(-4));  // s_01

// substring(start,end)  -> no negative (treats as 0) 

console.log(str.substring(5,9));  // _Tes


console.log(str.at(9));  // t
console.log(str.at(-1))  // 1
