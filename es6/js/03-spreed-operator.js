// en ES

var fruits = ['bananes', 'pommes'];
var vegetables = ['poireaux', 'carottes'];

var food = [fruits, vegetables];
// on obtient un tableau à deux dimensions

// pour obtenir un tableau à une dimension à partir de 2 tableaux
let food2 = [...fruits, ...vegetables];

// combiner avec d'autres chaînes
let food3 = [...fruits, ...vegetables, 'navets'];

console.log(food);
console.log(food2);
console.log(food3);

// utiliser les spreed operators dans une fonction
// En ES5
var mixer = function(ing1, ing2) {
    console.log(ing1 + " avec " + ing2);
}

// En ES6
let mixer2 = (ing1, ing2) => console.log(ing1 + " avec " + ing2);
mixer2('banane', 'poire');

// avec un spreed operator
let ingredients = ['carotte', 'fraise'];
mixer2(...ingredients);

let mixer3 = (...args) => console.log(args.join('-'));
mixer3('Fraise', 'banane', 'abricot'); //fraise-banane-abricot

