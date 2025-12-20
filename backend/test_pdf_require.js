
import { createRequire } from "module";
const require = createRequire(import.meta.url);
try {
    const pdf = require("pdf-parse");
    console.log("Keys:", Object.keys(pdf));
    console.log("Is function?", typeof pdf === 'function');
    // Try to see if it has 'default'
    if (pdf.default) console.log("Has default");
} catch (e) {
    console.error(e);
}
