//Re-write test2.js class in order to resolve any issues, and comment everything in order to let VSCode help you suggesting the code and its meaning

class MyClass {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        Object.freeze(this);
    }

    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

class MyClass2 {
    static getFullName(entity) {
        return entity.getFullName();
    }
}