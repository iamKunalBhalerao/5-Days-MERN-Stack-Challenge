// Literals in Javascript
//  - String Literals
//  - Template Literals
//  - Object Literals
//  - Array Literals

// ---------------------------------------------------------------------------------------
// String Literals- String literals in JavaScript are sequences of characters enclosed within single ('') or double ("") quotation marks. These literals allow us to represent textual data within our code.

// let myName = "Kunal Bhalerao"; - // created with ("")
// let message = 'This is message'; // created with ('')

// Concatenation of String - JavaScript also supports a feature that string literals can be concatenated using the '+' operator:

let firstName = "Kunal";
let lastName = "Bhalerao";

let fullName = firstName + " " + lastName;
// console.log(fullName);

// ---------------------------------------------------------------------------------------
// Template Literals - emplate literals are a feature introduced in ECMAScript 2015 (ES6) that provides us more flexible and readable string formatting in JavaScript.
// They are enclosed within backticks (``) instead of the single('') or double("") quotation marks.

let line1 = "main koi esaa geet gau";
let line2 = "ke araju jagau";

// main koi esaa geet gau
// ke araju jagau

let sum = `
${line1}, 
${line2}
`;

// console.log(sum);

// ---------------------------------------------------------------------------------------
// Object LIterals

let student = {
  firstName: "Kunal",
  age: 19,
  RollNo: 16,
};

// console.log(student.firstName);

// Array Literals

let allStudents = ["Kunal", "Siddhi", "Prem", "Shivraj"];
// console.log(allStudents[3]); // we can get values using their index values
