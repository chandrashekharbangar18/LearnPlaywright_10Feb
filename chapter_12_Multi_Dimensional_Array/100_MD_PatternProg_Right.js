//Ex 1
// n=3
//*
//**
//***

let n = 3;

for(let i = 0 ; i < n ; i++)
{
    let row = " " ;
    for(let j = 0 ; j <= i ; j++)
    {
        row = row+ "*  ";
    }
    console.log(row.trim());  // row.trim() is used to remove the trailing space at the end of each row
}

