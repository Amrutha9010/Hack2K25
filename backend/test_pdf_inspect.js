
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");
console.log("Keys:", Object.keys(pdf));
for (const key of Object.keys(pdf)) {
    console.log(`${key}: ${typeof pdf[key]}`);
}
