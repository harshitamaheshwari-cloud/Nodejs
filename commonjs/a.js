console.log("A: start");

const b = require("./b");

console.log("A: after requiring B");
console.log("B says:", b.message);

module.exports = {
  message: "Hello from A"
};

console.log("A: end");
