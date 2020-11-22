class Person {

    constructor(name = 'Anonymous', age = 0) {
        // console.log(name);
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // Backticks for string interpolation:
        return `Hi, I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// const me = new Person('Michael Shields', 42);
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getDescription());

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

// const aStudent = new Student('Mary', 17, 'Comp Sci');
// console.log(aStudent.getDescription());

// const anotherStudent = new Student('Bob', 17);
// console.log(anotherStudent.getDescription());

// const yetAnotherStudent = new Student();
// console.log(yetAnotherStudent.getDescription());


class Traveler extends Person {

    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    hasHome() {
        return !!this.home;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHome()) {
            greeting += ` I'm visiting from ${this.home}.`;
        }
        return greeting;
    }

}

const aTraveller = new Traveler('Mary', 17, 'Edmonton');
console.log(aTraveller);
console.log(aTraveller.getGreeting());

const anotherTraveller = new Traveler('Bob', 77);
console.log(anotherTraveller);
console.log(anotherTraveller.getGreeting());

const yetAnotherTraveller = new Traveler();
console.log(yetAnotherTraveller);
console.log(yetAnotherTraveller.getGreeting());
