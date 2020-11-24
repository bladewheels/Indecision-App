import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp subtitle={'Put your life in the hands of a computer'} />, document.getElementById('app'));

// ------ transform-class-properties --------
class OldSyntax {
    constructor() {
        this.name = 'Michael';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi, my name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
const greeting = oldSyntax.getGreeting;
console.log(greeting());

// ------------------------------
 class NewSyntax {
     name = 'Mike';
     getGreeting = () => {
        return `Hi, my name is ${this.name}.`;
     }
}
const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;
console.log(newGreeting());