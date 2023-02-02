class FieldElement {
    constructor(num, prime) {
        if (num >= prime || num < 0) {
            const error = new Error(
                `Number ${num} is out of range set by prime number (${prime})`
            );
            throw error;
        }
        this.num = num;
        this.prime = prime;
    }

    static equal(first, second) {
        if (
            !(first instanceof FieldElement) ||
            !(second instanceof FieldElement)
        )
            return false;
        return first.num === second.num && first.prime === second.prime;
    }

    static add(first, second) {
        if (
            !(first instanceof FieldElement) ||
            !(second instanceof FieldElement)
        ) {
            const error = new Error(
                `One of arguments is not final field element`
            );
            throw error;
        }
        if (first.prime !== second.prime) {
            const error = new Error(`Arguments have different prime numbers`);
            throw error;
        }

        const num = (first.num + second.num) % first.prime;
        return new FieldElement(num, first.prime);
    }

    static sub(first, second) {
        if (
            !(first instanceof FieldElement) ||
            !(second instanceof FieldElement)
        ) {
            const error = new Error(
                `One of arguments is not final field element`
            );
            throw error;
        }
        if (first.prime !== second.prime) {
            const error = new Error(`Arguments have different prime numbers`);
            throw error;
        }

        const num = (first.prime + first.num - second.num) % first.prime;
        return new FieldElement(num, first.prime);
    }
}

module.exports = FieldElement;
