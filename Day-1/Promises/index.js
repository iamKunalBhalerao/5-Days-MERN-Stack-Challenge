// Promises in JavaScript
// let firstPromise = new Promise((res, rej) => {
//   return res();
// });

// firstPromise
//   .then((v) => {
//     console.log("This is promise sesolve");
//   })
//   .catch((e) => {
//     console.log("some error");
//   });

// function greet() {
//   console.log("my name is Kunal");
// }

// setTimeout(greet, 3000);

let promise1 = new Promise((res, rej) => {
  setTimeout(res, 1000, "First");
});

let promise2 = new Promise((res, rej) => {
  setTimeout(res, 1000, "Second");
});

let promise3 = new Promise((res, rej) => {
  setTimeout(res, 1000, "Third");
});

Promise.all([promise1, promise2, promise3]).then((message) => {
  console.log(message);
});
