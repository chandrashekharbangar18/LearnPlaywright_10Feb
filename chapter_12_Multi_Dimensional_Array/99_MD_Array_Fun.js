// 2D Arrays - Common Operations

let score = [
    [25, 45, 55],
    [45, 56, 39],
    [35, 65, 85]
];
let rowSum = score.map(row => row.reduce((a,b) => a + b, 0));
console.log(rowSum);  // [125, 140, 185]

// by using for loop

for (let i = 0; i < score.length; i++) {
    let rowSum1 = 0;
    for (let j = 0; j < score[i].length; j++) {
        rowSum1 += score[i][j];
    }
    console.log(rowSum1);
}

// EX 

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"], // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],   // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"] // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}