// Increment Operator
let x = 5;
x++; // This is equivalent to x = x + 1
console.log(x); // Output: 6    

let a = 10;
let b= ++a; // b gets the value of a after incrementing a by 1, so a becomes 11 and b gets 11
console.log(a); // Output: 11
console.log(b); // Output: 11

let c = 20;
let d = c++; // d gets the value of c before incrementing c by 1, so d gets 20 and then c becomes 21
console.log(c); // Output: 21
console.log(d); // Output: 20   

// ERT table
// | Expression | Value of a | Value of b |
// |------------|------------|------------|
// | a++        | 5          | 5          | 
// | ++a        | 6          | 6          |

// Ex1
let p=10;
console.log(p++ + p);

// ERT table for Ex1
// | Expression | Value of p before | Value of p after | Result of Expression |
// |------------|-------------------|------------------|----------------------|
// | p++ + p    | 10                | 11               | 10 + 11 = 21         |

// Ex2
let q=5;
console.log(++q + q++);

// ERT table for Ex2
// | Expression | Value of q before | Value of q after | Result of Expression |
// |------------|-------------------|------------------|----------------------|
// | ++q + q++  | 5                 | 6                | 6 + 6 = 12           |


// Ex3
let r=10;
console.log(++r + ++r);
console.log(r); // Output: 12

// ERT table for Ex3
// | Expression | Value of r before | Value of r after | Result of Expression |
// |------------|-------------------|------------------|----------------------|
// | ++r + ++r  | 10                | 12               | 12 + 12 = 24           |