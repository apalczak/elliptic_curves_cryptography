const FieldElement = require("./fieldElement.js");

describe("Final Field Element tests", () => {
    it("Creates new final field element", () => {
        const num = 1;
        const prime = 5;
        const result = new FieldElement(num, prime);
        expect(result).toEqual({ num: num, prime: prime });
    });

    it("Could not create new final field element wiht improper num/prime", () => {
        const num = 5;
        const prime = 1;
        const errorFunction = () => {
            return new FieldElement(num, prime);
        };

        expect(errorFunction).toThrow(
            `Number ${num} is out of range set by prime number (${prime})`
        );
    });

    it("Validates 'equal' method for two correct final field elements", () => {
        const num = 1;
        const prime = 5;
        const first = new FieldElement(num, prime);
        const second = new FieldElement(num, prime);
        const result = FieldElement.equal(first, second);
        expect(result).toEqual(true);
    });

    it("Validates 'equal' method for two final field elements with different num", () => {
        const first = new FieldElement(1, 5);
        const second = new FieldElement(2, 5);
        const result = FieldElement.equal(first, second);
        expect(result).toEqual(false);
    });

    it("Validates 'equal' method for two final field elements with different prime", () => {
        const first = new FieldElement(1, 5);
        const second = new FieldElement(1, 6);
        const result = FieldElement.equal(first, second);
        expect(result).toEqual(false);
    });

    it("Validates the addition of the two correct final field elements ", () => {
        const first = new FieldElement(3, 5);
        const second = new FieldElement(4, 5);
        const result = FieldElement.add(first, second);
        expect(result).toEqual({ num: 2, prime: 5 });
    });

    it("Unable to add argument that is not a final field element", () => {
        const first = new FieldElement(3, 5);
        const second = 2;
        const errorFunction = () => {
            return FieldElement.add(first, second);
        };
        expect(errorFunction).toThrow(
            "One of arguments is not final field element"
        );
    });

    it("Unable to add two final field elements with different primes", () => {
        const first = new FieldElement(3, 5);
        const second = new FieldElement(4, 6);
        const errorFunction = () => {
            return FieldElement.add(first, second);
        };
        expect(errorFunction).toThrow("Arguments have different prime numbers");
    });
});
