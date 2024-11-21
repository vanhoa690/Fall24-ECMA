// console.log("Start");
// // showLongTimeTask();
// getProductList();
// setTimeout(() => console.log("Timeout"), 1000);
// console.log("End");

// function showLongTimeTask() {
//   let count = 0;
//   for (let i = 0; i < 1e9; i++) {
//     count++;
//   }
//   console.log("Done showLongTimeTask");
// }

// async function getProductList() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   console.log(res.ok);
// }
// Promise.resolve().then(() => {
//   console.log("1");
// });

// setTimeout(() => {
//   console.log("2");
// }, 10);

// queueMicrotask(() => {
//   console.log("3");
//   queueMicrotask(() => {
//     console.log("4");
//   });
// });

// console.log("5");

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
