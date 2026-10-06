import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const cache = new Map();

function myRequire(request, parentDir) {
  let file = path.resolve(parentDir, request);

  if (!fs.existsSync(file)) {
    if (fs.existsSync(file + ".js")) file += ".js";
    else if (fs.existsSync(path.join(file, "index.js"))) {
      file = path.join(file, "index.js");
    } else {
      throw new Error("Module not found: " + request);
    }
  }

  if (cache.has(file)) {
    return cache.get(file).exports;
  }

  const module = { exports: {} };
  cache.set(file, module);

  const code = fs.readFileSync(file, "utf8");

  const wrapper = `(function(exports, require, module, __filename, __dirname) {
${code}
})`;

  const fn = vm.runInThisContext(wrapper);

  const require = (name) =>
    myRequire(name, path.dirname(file));

  fn(module.exports, require, module, file, path.dirname(file));

  return module.exports;
}
export { myRequire };
