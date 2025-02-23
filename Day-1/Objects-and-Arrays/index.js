// Arrays and Objects
// Objects - {}

// Creating a Object
let user = {
  userName: "Kunal",
  id: 20,
  greet: function () {
    console.log("Hello World");
  },
};

// Accessing a object
// console.log(user);

// Accessing a functio in object
// user.greet();

// console.log(typeof user);

// let student = {
//   firstName: "Kunal",
//   lastName: "Bhalerao",
// };

// let newObj = student;
// console.log(newObj);

// ---------------------------------------------------------------------------------------
// Arrays - []

let arr = ["Kunal", 19, true];

// console.log(arr);

// Accessing Array Elements
// console.log(arr[1]);

// methods in Array

// let newArr = ["Kunal", "Bhalerao", 19, true];

// newArr.push("new"); // Add element last in Array

// newArr.pop(); // Remove Element from last in Array

// newArr.unshift("new"); // Add element start of Array

// newArr.shift(); // Remove element from start of array

// .slice(value, option) method to slice array into two parts
// let sliceArr = newArr.slice(1, 3); // slice the array from starting value to ending value whichh you are given
// console.log(sliceArr);

// .splice() method to insert, replace, remove elements in array at any position

// newArr.splice(1, 2, "Siddhi"); // It says from '1st' index remove 2 elements and add siddhi

// console.log(newArr);

// map
// let newArr = [10, 20, 30];

// let ans = newArr.map((num) => {
//   return num * num;
// });

// let ans = newArr.map((e) => {
//   return e;
// });
// console.log(ans);

// --------------------------------------------------------------------------------------
// filter
// let newArr = [10, 20, 30, 22, 34, 35, 66, 11];

// newArr.filter((e) => {
//   return e % 2 == 0
//     ? console.log(`Even No. are ${e}`)
//     : console.log(`Odd No. are ${e}`);
// });

// Reduce
// let newArr = [10, 20, 30, 40];

// let ans = newArr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(ans);

// ---------------------------------------------------------------------------------------
// Sorting in JS

// let newArr = [9, 7, 5, 2, 4, 6];
// newArr.sort(); // Sort in Assending Order
// newArr.sort().reverse(); // Sort in Desending Order
// console.log(newArr);

// ---------------------------------------------------------------------------------------
// Indexof - to find the index of specific element
// let newArr = [1, 2, 3, 4, 5, 6];
// console.log(newArr.indexOf(4));

// ---------------------------------------------------------------------------------------
// find
// let newArr = [1, 2, 4, 5];
// console.log(
//   newArr.find((e) => {
//     return e > 2;
//   })
// );

// ---------------------------------------------------------------------------------------
// For-Each
let newArr = [1, 2, 3, 4, 5, 6];
newArr.forEach((e) => {
  console.log(e);
});
