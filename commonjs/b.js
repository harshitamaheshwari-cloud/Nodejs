console.log("B: start");

const a = require("./a");

console.log("B: after requiring A");
console.log("A says:", a.message);

module.exports = {
  message: "Hello from B"
};

console.log("B: end");
