
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfRequire = require("pdf-parse");

import pdfImport from "pdf-parse";

console.log("Type of pdfRequire:", typeof pdfRequire);
console.log("Is pdfRequire a function?", typeof pdfRequire === 'function');
console.log("pdfRequire keys:", Object.keys(pdfRequire));

console.log("Type of pdfImport:", typeof pdfImport);
console.log("Is pdfImport a function?", typeof pdfImport === 'function');
console.log("pdfImport keys:", Object.keys(pdfImport));
// console.log("pdfImport default:", pdfImport.default); // Check if it has a default prop
