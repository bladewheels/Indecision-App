// import * as utils from './utils.js' ;
// console.log('5x5=', utils.square(5));
// or:
// import /* anyIdentifierForTheDefaultExport */ subtract, { square, add } from './utils.js' ;

// console.log('Indecision App is running.');
// console.log('5x5=', square(5));
// console.log('5+6=', add(5,6));
// // console.log('5-6=', anyIdentifierForTheDefaultExport(5,6));
// console.log('5-6=', subtract(5,6));

import isSeniorInAlberta, { isAdult, canDrinkAlcohol } from './person.js' ;
// console.log(`If your age is 17 then you are ${((isAdult(17)) ? '': 'not')} considered an adult in Alberta.`);
// console.log(`If your age is 18 then you are ${((isAdult(18)) ? '': 'not')} considered an adult in Alberta.`);
// console.log(`If your age is 17 then you can ${((canDrinkAlcohol(17)) ? '': 'not ')}drink alcohol in Alberta.`);
// console.log(`If your age is 18 then you can ${((canDrinkAlcohol(18)) ? '': 'not ')}drink alcohol in Alberta.`);
console.log(`If your age is 64 then you are ${((isSeniorInAlberta(64)) ? '': 'not')} considered a senior citizen in Alberta.`);
console.log(`If your age is 65 then you are ${((isSeniorInAlberta(65)) ? '': 'not')} considered a senior citizen in Alberta.`);