// Primitive types

let name: string = "John";
let age: number = 30;
let pi: number = 3.14;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["John", "Jane"];

// Any type (Avoid when possible)
let anything: any = "Hello";
anything = 42; // Can be reassigned to any type
