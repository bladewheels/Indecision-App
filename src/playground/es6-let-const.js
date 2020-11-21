var nameVar = 'Michael'
var nameVar = ['Bob','Carol','Ted','Alice'];

console.log('nameVar: ', nameVar);

let nameLet = 'Letterman';
// INVALID: re-DEFINing a let variable e.g. let nameLet = 'David';
console.log('nameLet', nameLet);

const nameConst = 'Foo';
// INVALID: re-DEFINing OR re-ASIGNing a const variable e.g. const nameConst = 'Bar';
console.log('nameConst', nameConst);

// var/let/const variables are FUNCTION scoped
function getPetName() {
    var varPetName = 'Muffy';
    let letPetName = 'Miffy';
    const constPetName = 'M00ffy';
    return { var: varPetName, let: letPetName, const: constPetName };
}

console.log(getPetName());
// console.log(varPetName);
// console.log(letPetName);
// console.log(constPetName);

// let and const variables are ALSO BLOCK scoped, var variables ARE NOT
var fullName = 'Michael Shields';
let firstName = 'Bob';

// A block:
if (fullName) {
    var varFirstName = fullName.split(' ')[0];
    let letFirstName = fullName.split(' ')[0];
    const constFirstName = fullName.split(' ')[0];
    console.log('BLOCK: var: ', varFirstName, ', let: ', letFirstName, ', const: ', constFirstName);
}
console.log('OUTER var: ', varFirstName);
console.log('OUTER let: ', firstName);
// console.log('OUTER: let: ', letFirstName, ', const: ', constFirstName);

// Therefore, in this course: Prefer const to let to var variable definitions