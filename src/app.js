// import * as utils from './utils.js' ;
// console.log('5x5=', utils.square(5));
// or:
// import /* anyIdentifierForTheDefaultExport */ subtract, { square, add } from './utils.js' ;

console.log('Indecision App is running.');
// console.log('5x5=', square(5));
// console.log('5+6=', add(5,6));
// // console.log('5-6=', anyIdentifierForTheDefaultExport(5,6));
// console.log('5-6=', subtract(5,6));

// import isSeniorInAlberta, { isAdult, canDrinkAlcohol } from './person.js' ;
// console.log(`If your age is 17 then you are ${((isAdult(17)) ? '': 'not')} considered an adult in Alberta.`);
// console.log(`If your age is 18 then you are ${((isAdult(18)) ? '': 'not')} considered an adult in Alberta.`);
// console.log(`If your age is 17 then you can ${((canDrinkAlcohol(17)) ? '': 'not')} drink alcohol in Alberta.`);
// console.log(`If your age is 18 then you can ${((canDrinkAlcohol(18)) ? '': 'not')} drink alcohol in Alberta.`);
// console.log(`If your age is 64 then you are ${((isSeniorInAlberta(64)) ? '': 'not')} considered a senior citizen in Alberta.`);
// console.log(`If your age is 65 then you are ${((isSeniorInAlberta(65)) ? '': 'not')} considered a senior citizen in Alberta.`);

//  install (3rd-party module(s) e.g. yarn add validator@8.0.0) --> import --> use
// import validator from 'validator' ;
// console.log(`This email address (i.e. a.b@c.de) is${((validator.isEmail('a.b@c.de')) ? '': ' not')} valid.`);
// console.log(`This email address (i.e. michael.leonard.shields@gmail.com) is${((validator.isEmail('michael.leonard.shields@gmail.com')) ? '': ' not')} valid.`);
// console.log(`This email address (i.e. abcdef) is${((validator.isEmail('abcdef')) ? '': ' not')} valid.`);

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>test imports</p>;
ReactDOM.render(template, document.getElementById('app'));
// Above causes an error because Babel is NOT (yet) converting the ES5 code to ES6 i.e. JSX
// ReactDOM.render(React.createElement('p', {}, 'test imports wo/Babel'), document.getElementById('app'));


