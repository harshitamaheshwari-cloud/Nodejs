import { myRequire } from "./loader.js";

const a = myRequire("./counter", import.meta.dirname);
console.log(a.next());
console.log(a.next());

const b = myRequire("./counter.js", import.meta.dirname);
console.log(b.next());

console.log(a === b);
