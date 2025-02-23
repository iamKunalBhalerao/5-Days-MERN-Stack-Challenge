// Loops
// Types if loops
// - for Loop
// - while Loop
// - Do-while Loop

// ---------------------------------------------------------------------------------------
// FOR LOOP
/*
for (let i = 1; i <= 6; i++) {
  if (i == 4) continue;
  else {
    console.log(i);
  }
}
*/

// ---------------------------------------------------------------------------------------
// WHILE LOOP

/*
let i = 1;
while (i <= 5) {
  //   console.log("Kunal");
  i++;
}
// OR
while (i <= 10) {
  //   console.log(i);
  i++;
}
*/

// for (let i = 5; i > 0; i--) {
//   //   console.log(i);
// }
// // OR
// let i = 5;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 1; i <= 6; i++) {
//   if (i == 4) break;
//   else {
//     console.log(i);
//   }
// }
// // OR

// let i = 1;
// while (i <= 6) {
//   if (i == 4) break;
//   else {
//     console.log(i);
//     i++;
//   }
// }

// for (let i = 1; i < 6; i++) {
//   if (i == 4) continue;
//   else {
//     console.log(i);
//   }
// }
// // OR

// let i = 1;
// while (i < 6) {
//   if (i == 4) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//     i++;
//   }
// }

// ---------------------------------------------------------------------------------------
// Do-While LOOP

// let i = 1;
// do {
//   console.log("hi");
//   i++;
// } while (i <= 5);

// let i = 1;

// do {
//   if (i == 4) continue;
//   else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 10);

// ---------------------------------------------------------------------------------------
// Strings

// let firstName = "Kunal";
// // let lastName = 'Bhalerao'
// let name = `Kunal
// Bhalerao`;

// let name = new String("This is new String");
// console.log(name);

// Operations do on String
// Concatination +
// let firstName = "Kunal ";
// let lastName = "Bhalerao ";

// let ans = firstName + lastName; // It will Concatinate mean add two strings

// console.log(ans);

let firstName = "Kunal";
let lastName = "BHALERAO";

// let ans = `${firstName} ${lastName}`;
// console.log(ans)

// Convert to UpperCase - .toUpperCase()
// let upperCase = firstName.toUpperCase();
// console.log(upperCase);

// Convetr to LowerCase - .toLowerCase()
// let lowerCase = lastName.toLowerCase();
// console.log(lowerCase);

// get a Substring - .substring(value, option)
// let newStr = "Kunal Bhalerao";

// let ans = newStr.substring(1, 5);
// console.log(ans)

// Split the String into an Array - .split()

let newStr = "Hello My Name is Kunal";

let ans = newStr.split(" ");
// console.log(ans);
// console.log(ans.join(" "));
