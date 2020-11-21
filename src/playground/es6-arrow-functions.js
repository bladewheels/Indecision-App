// const square = function(x) {
function square(x) {
    return x * x;
}
console.log('6 squared: ', square(6));

const squareArrow = (x) => x * x; // aka { return x * x };
console.log('7 ()=> squared: ', square(7));

// CHALLENGE:
function getLastName(name) {
    return name.split(' ')[1];
}
console.log('ES5-function last name splitter: ', getLastName('Bob MacKenzie'));

const getFirstNameConcisely = (name) => name.split(' ')[0];
console.log('ES6-arrow function first name splitter: ', getFirstNameConcisely("Michael Shields"));