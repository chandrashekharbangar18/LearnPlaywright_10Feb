let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid[0][0]);  // 10
console.log(grid[2][1]);    // 80

// we can modify the value
grid[0][0] = 111;
console.log(grid[0][0]);  // 111
console.log(grid);

// length - based on no. of rows
console.log(grid.length);  // 3 rows    

// last element
console.log(grid[grid.length-1][grid[0].length-1]);  // 90

// Ex 2

let test_Matrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 401],
    ["logout", "skip", 500]
];

for(let i=0; i<test_Matrix.length; i++)
{
    for(let j=0; j<test_Matrix[i].length; j++)
    {
       // console.log(test_Matrix[i][j] + " ");
       process.stdout.write(test_Matrix[i][j] +  "   "); // Use process.stdout.write to avoid new line
    }
    console.log(" "); // Add a newline after each row
}