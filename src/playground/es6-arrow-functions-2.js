const add = function(a,b) {
    console.log('add(', arguments, ') called.');
    return a + b;
};
console.log('2 + 3 = ', add(2,3,4));

// The 'arguments' object is NOT bound to an arrow function
const addArrow = (a,b) => {
    // console.log('addArrow(', arguments, ') called.');
    return a + b;
};
console.log('3 + 4 = ', addArrow(3,4));
/////////

// The 'this' keyword IS bound to an arrow function i.e. an arrow function does NOT bind it's own 'this'
const user = {
    name: 'Michael'
    , placesLived: ['Vancouver', 'Edmonton', 'Charlottetown']
    ,printPlacesLived: function() {
        console.log('Name: ', this.name); // 'this' is accessible here OK
        console.log('Places lived: ', this.placesLived);
        this.placesLived.forEach(function(place) { 
            // console.log(this.name); // BUT 'this' is not accessible here
            // (i.e. in this enclosing, anonymous ES5 function passed to forEach())
        }); 
        // A workaround is to reference 'this' in the enclosing scope, re-assigning it to a new variable, and use the new reference
        const that = this;
        this.placesLived.forEach(function(place) { 
            console.log(that.name,' has lived in ', place); // Use of 'that' reference
        });
        // OR, use an (ES6) arrow function
        this.placesLived.forEach((place) => { 
            console.log(this.name,' once lived in ', place);
        });
    }
    ,printPlacesLivedViaNewSyntax() /* <--- THIS is a new method definition syntax in ES6 for object properties as functions */ {
        this.placesLived.forEach((place) => { 
            console.log(this.name,' once (again) lived in ', place);
        });
    }
    ,getPlacesLivedViaMap() {
        return this.placesLived.map((place) => this.name + ' has lived in ' + place);

    }
};
user.printPlacesLived();
user.printPlacesLivedViaNewSyntax();

// console.log(user.getPlacesLivedViaMap);
console.table(user.getPlacesLivedViaMap());


/////////
// CHALLENGE:
const multiplier = {
    numbers: [],
    multiplier: 0,
    multiply() {
        return this.numbers.map((number) => number * this.multiplier );
    }
};
multiplier.numbers = [1,2,3];
multiplier.multiplier = 2;
console.table(multiplier.multiply());
