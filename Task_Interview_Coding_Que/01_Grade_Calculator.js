//Ex1 --> Grade Calculator
//Score 90-100 --> A
//Score 80-89 --> B
//Score 70-79 --> C
//Score 60-69 --> D
//Score 0-59 --> F
// incalid score --> Invalid score

let grade ;
let score = 85;

if(typeof score !== 'number')
{
    console.log("Given score is not a number");
    return;
}

if(score<0 || score>100)
{
    console.log("GIven score is invalid");
    return;
}

if(score>=90 && score<=100){
    grade = 'A';
}
else if(score>=80 && score<=89){
    grade = 'B';
}
else if(score>=70 && score<=79){
    grade = 'C';
}
else if(score>=60 && score<=69){
    grade = 'D';
}
else if(score>=0 && score<=59){
    grade = 'F';
}  
else{
    grade = 'Invalid score';
}
console.log("Your score is -->", score,  "Grade is-->",  grade);
//or
console.log(`Your score is --> ${score} Grade is --> ${grade}`);