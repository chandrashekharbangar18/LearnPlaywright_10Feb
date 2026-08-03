let browser = ['chrome', 'firefox', 'safari', 'edge', 'opera'];
console.log(browser); 
console.log(browser.length); // 5

console.log("-------------------------------");

let removed_Last = browser.pop(); // Removes the last element from the array
console.log(browser); 
console.log(removed_Last); // 'opera'
console.log(browser.length); // 4

console.log("-------------------------------");

let removed_First = browser.shift(); // Removes the first element from the array
console.log(browser); 
console.log(removed_First); // 'chrome'
console.log(browser.length); // 4
console.log("-------------------------------");

// For loop

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === 'edge') {
        console.log('Edge is the default browser for Microsoft devices.');
    }     
}