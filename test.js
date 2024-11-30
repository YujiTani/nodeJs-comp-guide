const fs = require("fs");
const path = require("path");
const calc = require("./testmodule");

// console.log(__dirname);

// const torainingPath = path.resolve(__dirname, "./training/test2.js");
// console.log(torainingPath);

// fs.writeFileSync(torainingPath, "Hello Node.js");
const result = calc.plus(1, 2);
const result2 = calc.minus(10, 2);
console.log(result);
console.log(result2);
