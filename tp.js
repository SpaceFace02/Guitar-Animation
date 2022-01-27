console.log("Synchronous 1 🍑");

setTimeout(() => {
  console.log("Asynchronous 2 🍍");
}, 0);

Promise.resolve("Asynchronous 3 🍎").then((v) => console.log(v));

console.log("Synchronous 4 🍊");
