// map --> transform every element of an array into a new array

let score = [45, 78, 90, 46, 89];
let updateArrayWithGrade = score.map(value => value >50 ? 'Pass' : 'Fail');
console.log(updateArrayWithGrade);

console.log("-------------------------------");

// filter --> reverse of map that is keep the element that pass the condition and 
// remove the element that does not pass the condition

let passScore = score.filter(value => value > 50);
console.log(passScore);

console.log("-------------------------------");

// reduce --> reduce the array into a single value

let totalScore = score.reduce((sum, value) => sum + value, 0);
console.log(totalScore);

console.log("-------------------------------");

// flat --> flatten the array into a single array

let nestedArray = [1, 2, [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log(flatArray);