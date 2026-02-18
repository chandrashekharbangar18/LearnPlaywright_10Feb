// Identifiers, Literals, operators, Keywords in JavaScript

// Ex. 1
var a = 10;  // Identifier: a, Literal or variable value: 10, Operator: =, Keyword: var
a = 20;
console.log(a);

// Literal or variable value: 10, 20, "Hello", true, false, null, undefined
// Operator: =, +, -, *, /, %, ++, --, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !
// Keywords: var, let, const, if, else, for, while, do, switch, case, break, continue, 
//           function, return, class, try, catch, finally

// Rules for Identifiers in JavaScript
// 1. An identifier must start with a letter, underscore (_) or dollar sign ($).
// 2. An identifier can contain letters, digits, underscores and dollar signs.
// 3. An identifier cannot be a reserved keyword.
// 4. An identifier cannot contain spaces.
// 5. cannot contzain special characters except _ and $.
// 6. An identifier is case-sensitive. 
//7. An identifier cannot start with a digit.

// Valid identifiers    
var name = "John";  // Valid
var _age = 30;  // Valid            
var $salary = 50000;  // Valid
var firstName = "John";  // Valid
var last_name = "Doe";  // Valid
var fullName = firstName + " " + last_name;  // Valid
console.log(fullName);

// Invalid identifiers
// var 1name = "John";  // Invalid: cannot start with a digit
// var first-name = "John";  // Invalid: cannot contain hyphen
// var last name = "Doe";  // Invalid: cannot contain space
// var var = "Hello";  // Invalid: cannot be a reserved keyword\

var pi = 3.14;  // Valid
var isValid = true;  // Valid
var nullValue = null;   // Valid
var undefinedValue;  // Valid, value is undefined           


// Literals are fixed values that are directly written in the code. 
// They can be of different types such as string, number, boolean, null, undefined, etc.
//  For example: 
var name = "John";  // String literal
var age = 30;  // Number literal
var isValid = true;  // Boolean literal
var nullValue = null;  // Null literal
var undefinedValue;  // Undefined literal

// Keywords are reserved words that have a special meaning in JavaScript.
// They cannot be used as identifiers (variable names, function names, etc.) in the code.
// For example:
// var, let, const, if, else, for, while, do, switch, case, break, continue,
// function, return, class, try, catch, finally, etc. are all keywords in JavaScript.
 
// Operators are symbols that perform operations on operands (variables, literals, etc.) in the code.
// operators can be arithmetic, assignment, comparison, logical, etc.
// Operators is one of the core concepts of JavaScript, and they are used to perform various operations 
// in the code.
// For example:
// +, -, *, /, %, ++, -- are arithmetic operators
// =, +=, -=, *=, /=, %= are assignment operators
// ==, ===, !=, !==, >, <, >=, <= are comparison operators
// &&, ||, ! are logical operators

// Ex 2: Using operators
var x = 10;
var y = 20;
var sum = x + y;
console.log("Sum is:", sum);

