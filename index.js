const FieldElement = require("./fieldElement.js");

const a = new FieldElement(13, 19);
const b = new FieldElement(6, 19);
const c = FieldElement.sub(a, b);
console.log(c);
