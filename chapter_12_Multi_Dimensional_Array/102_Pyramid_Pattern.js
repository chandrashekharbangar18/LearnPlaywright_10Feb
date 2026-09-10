// Ex1 star pyramid pattern

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let str = "";
    
    // 1. Add spaces to center the pyramid
    for (let j = 1; j <= rows - i; j++) {
        str += " ";
    }
    
    // 2. Add stars for the pyramid structure
    for (let k = 1; k <= (2 * i - 1); k++) {
        str += "*";
    }
    
    console.log(str);
}

console.log("-----------------------------------------");

// Ex2 inverted star pyramid pattern 

let rows1 = 5;

for (let i = rows; i >= 1; i--) {
    let str = "";
    
    // 1. Add spaces to push the stars into alignment
    for (let j = 1; j <= rows1 - i; j++) {
        str += " ";
    }
    
    // 2. Add stars for the inverted pyramid structure
    for (let k = 1; k <= (2 * i - 1); k++) {
        str += "*";
    }
    
    console.log(str);
}