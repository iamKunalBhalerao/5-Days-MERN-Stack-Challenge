// function getData() {
//   setTimeout(() => {
//     console.log("Inside setTimeout");
//   }, 3000);
// }

// getData();

// // Fetch API

async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let data = await res.json();
  console.log(data);
}
getData();
