// Operators
// Types of operators -
let a = 10;
let b = 20;
//  - Arithmetic Operators
//    - Addition: +
let sum = a + b; // 30

//    - Subtraction: -
let sub = a - b; // -10

//    - Multiplication: *
let mul = a * b; // 200

//    - Division: /
let div = a / b; // 0.5

//    - Exponentiation: **
let expo = a ** b; // 100000000000000000000

//    - Modules: %
let mod = a % b; // 10

//    - pre-Increment: ++
// ++a; // 11

//    - post-Increment: ++
// a++; // 11

//    - pre-Decrement: --
// a--; // 9

//    - post-Decrement: --
// a--; // 9

// -------------------------------------------------------------------------------------------------------------
//  - Assignment Operators - The most common assignment operator we use is '='.
let num1 = 2; // = is the Assignment Operator
/*
enum1 = enum1 + 2; // Or
enum1 += 2; // These Both do the same work

enum1 = enum1 - 2; // Or
enum1 -= 2; // These Both do the same work

enum1 = enum1 * 2; // Or
enum1 *= 2; // These Both do the same work

enum1 = enum1 / 2; // Or
enum1 /= 2; // These Both do the same work

// These are Called Short Hand Notation's - +=, -=, *=, /=
*/

// -------------------------------------------------------------------------------------------------------------
//  - Comparison Operators - Comparison operators, such as greater then (>), less than (<), greater than or equal (>=), less than or equal (<=), equal to (==), not equal to (!=) are used to compare values and determine the relationship between them.
// Their answers always in the form of true or false

let x = 2;
let y = 4;

let graterThan = x > y; // false

let lessThan = x < y; // true
// same with >= and <=

let equalTo = x == y; // false
let notEqualTo = x != y; // true

// Strict Equality v/s Loose Equality :-

// - Strict equality -  is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.

// - Loose equality -  is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.

let n = "10";
// console.log(typeof n); // string

let m = 10;
// console.log(typeof m); // number

// console.log(n == m); // true

// console.log(n === m); // false

// -------------------------------------------------------------------------------------------------------------
//  - Logical Operators
/*
There are typically three types of logical operators :

1 AND (&&)
2 OR (||)
3 NOT (!)

*/
// AND (&&) - The logical AND operator is denoted by '&&'. It is used to evaluate whether both of the given expressions or operands are true. It returns true only if both expressions or operands are true.

/*
let alert1 = true; // true = 1
let alert2 = false; // false = 0
let alert3 = true; // true = 1

console.log(alert1 && alert2); // false
console.log(alert2 && alert3); // false
console.log(alert1 && alert3); // true
*/

// OR (||) - The logical OR operator is denoted by '||'. It is used to evaluate whether any one of the given expressions or operands is true. It returns false only if both expressions or operands are false.

/*
let alert1 = false; // true = 1
let alert2 = false; // false = 0
let alert3 = true; // true = 1

console.log(alert1 || alert2); // false
console.log(alert2 || alert3); // true
console.log(alert1 || alert3); // true
*/

// NOT (!) - The logical NOT operator is denoted by '!'. It is used to make truthy values falsy and vice-versa. It returns false if input is a true.

/*
let alert1 = false;
let alert2;
let alert3 = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;

console.log(!alert1);
console.log(!alert2);
console.log(!alert3);
console.log(!mySum);
console.log(!gone);
console.log(!isFirst);
*/

// -------------------------------------------------------------------------------------------------------------
//  - Bitwise Operators - Bitwise operators are used to do manipulation of individual bits within the binary representation of numbers.
/*
 There are several bitwise operators are used in JavaScript :
1 Bitwise AND (&)
2 Bitwise OR (|)
3 Bitwise NOT (~)
4 Bitwise XOR (^)
5 Left Shift (<<)
6 Right Shift (>>)
*/

// 1 Bitwise AND (&) - Bitwise AND is denoted by '&'. It is used between two numbers, and the bitwise AND operation is performed on each corresponding bit of the two numbers.

/*
let enum1 = 5;
// Binary representation of 5 : 0 1 0 1

let enum2 = 7;
// Binary representation of 7 : 0 1 1 1

console.log(enum1 & enum2); // 5
*/

// Bitwise OR (|) - Bitwise OR is denoted by '|'. It is used between two numbers, and the bitwise OR operation is performed on each corresponding bit of the two numbers.

/*
let enum1 = 5;
// Binary representation of 5 : 0 1 0 1

let enum2 = 8;
// Binary representation of 7 : 1 0 0 0

console.log(enum1 | enum2); // 13
*/

// Bitwise NOT (~) - Bitwise NOT is denoted by '~', it is used on a single number. Bitwise NOT operator inverts all the bits (0 is inverted to 1 and 1 is inverted to 0) of the given number and returns the new number as output.

/*
let enum1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let enum2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

let enum3 = -8;
// Binary representation of -8 : 1 1 1 1 0 0 0

console.log(~enum1); // -6
console.log(~enum2); // -9
console.log(~enum3); // 7
*/

// Bitwise XOR (^) - Bitwise XOR is denoted by '^'. It is used between two numbers, and the bitwise XOR operation is performed on each corresponding bit of the two numbers.

/*
let enum1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let enum2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(enum1 ^ enum2); // 13
*/

// Left Shift (<<) - Left shift operator is denoted by '<<'. It shifts the bits of the left operand to the left, by a number of positions specified by the right operand. 0 comes in the place of the least significant bit after each shifting is done.

/*
let enum1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let enum2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(enum1 << 3); // 40
console.log(enum2 << 2); // 32
*/

// Right Shift (>>) - Right shift operator is denoted by '>>'. It shifts the bits of the left operand to the right, by a number of positions specified by the right operand preserving the sign of the original number.

/*
let enum1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let enum2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(enum1 >> 3); // 0
console.log(enum2 >> 2); // 2
*/

// -------------------------------------------------------------------------------------------------------------
//  - Ternary Operators - Ternary operator is a concise way to write conditional statements, it is widely used in JavaScript.

let age = 13;
const ans = age >= 18 ? "I can Vote" : "I can't Vote";
// console.log(ans);

// Short Circuting

// console.log(false || true || false || true || false);
// It will break the chain in the middle of conditions chacking while he get their truthy value or vice versa
