const FieldElement = require("./fieldElement.js");

const a = new FieldElement(3, 5);
const b = new FieldElement(2, 5);
const c = FieldElement.add(a, b);
