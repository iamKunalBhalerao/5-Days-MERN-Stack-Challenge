// Variable is just a named memory location
// 3 types of declaring a variable - let, var, const

// var is function-scoped or globally-scoped
function greet() {
  var x = "Hello World";
  console.log(x);
}
// greet();
// console.log(x);

// we cannot use variables declared with var keywork outside the scope
// variables declared with var are hoisted to the top of their function or global scope
//  var keyword allows variables to be both reassigned and redefined within the same scope
var x = 10;
// console.log(x);
var x = 20;
// console.log(x);

// After we declare another value for same variable name then var will overwride the value of actual variable
//  -----------------------------------------------------------------------------------------------------
// To solved That Issue in ES6 introduced let and const
// let is block/brackets scope
{
  let a = 10;
}
// let cant give the permission of override the value of variable
let a = 10;
// let a = 10; // It is not possible, we cannot redeclare variable, But

// we can manipulate the vallues of variable like this
a = 20;
// console.log(a); // It is possible
// -------------------------------------------------------------------------------------------------------
// In const we can only declare the value once, and we do not change the value o const variable
const b = 20;
// b = 30; This is not possible
// console.log(b);

// ----------------------------------**-------------------------------------------------------------

// Datatypes in Javascript
// 1 Premitive Datatypes
// - Number
// - Float
// - String
// - Undefined
// - Null
// - Boolean

// Number
let integerNumber = 3;
// console.log(typeof integerNumber); // number

// float
let floatNumber = 3.14;
// console.log(typeof floatNumber); // number

let output = integerNumber + floatNumber;
// console.log(output); // Result will be a floating-point number

// String - to define a string we use '' | "" | ``  represents sequences of characters.
let strNum = "25";
// console.log(typeof strNum); // String

// To see the lengeth of string we use .length method
let message = "Kunal";
// console.log(message.length);

// To upperCase the string we use .toUpperCase method
let newString1 = "this is lowercase letters";
// console.log(newString1.toUpperCase());

// To lowerCase the string we use .toLowerCase method
let newString2 = "THIS  IS UPPERCASE LETTERS";
// console.log(newString2.toLowerCase());

// the split() method is used to split a string into an array of substrings based on a specified separator.
let newString3 = "This is string to split";
// console.log(newString3.split(" "));

// -------------------------------------------------------------------------------------------------------------
// Boolean - The Boolean primitive datatype represents a logical value, which can be either true or false.

let isBoolean = true;
// console.log(typeof isBoolean);

// -------------------------------------------------------------------------------------------------------------
// Undefined - undefined is a primitive value that represents a variable that has been declared but has not been assigned a value.
let newvar;
// console.log(newvar); // Undefined

// -------------------------------------------------------------------------------------------------------------
// Null - null is a primitive value that represents the intentional absence of any object value.
let range = null;
// console.log(range); // null
// console.log(typeof range); // object

// -------------------------------------------------------------------------------------------------------------
// 2 Non-Premitive Datatypes

// - Object - Objects store the data in the form of key-value pairs where keys are strings and values can be of any data type
let person = {
  name: "Mayank",
  age: 21,
  country: "India",
};

// console.log(person.name); // Mayank
// console.log(person.age); // 21
// console.log(person.country); // India

// console.log(person["name"]); // Another way to get value from object

// -------------------------------------------------------------------------------------------------------------
// - Array - Arrays in JavaScript is a collection of items of same datatype or different datatype at contiguous memory locations.

let names = ["Kunal", "Siddhi", "Prem"]; // Defining an Array

// console.log(`${names[0]} ${names[1]}`); // Accessing values from Aray

// names.push("Tejas"); // Adding Items in Array - It will add value in end of array
// console.log(names);

// names.unshift("King"); // Adding Items in Array - It will add value in start of array
// console.log(names);

// names.pop(); // Deleting Items from Array - it delets last value from Array
// console.log(names);

// names.shift(); // Deleting Items from Array - it delets first value from Array
// console.log(names);

// -------------------------------------------------------------------------------------------------------------
// - Function - functions are the reusable piece of code that can be called and executed at any point in our program.
// 2 types of defining function

function fnName() {
  console.log("Hello World");
}

const newFn = function () {
  console.log("This is another type of writing function");
};
