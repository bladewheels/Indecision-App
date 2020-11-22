class Person {

    constructor(name = 'Anonymous', age = 0) {
        // console.log(name);
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // Backticks for string interpolation:
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Michael Shields', 42);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());