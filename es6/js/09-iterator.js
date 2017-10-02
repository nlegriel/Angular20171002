let fruits = new Set();
fruits.add('pomme').add('banane');
let fruitsIteratorEntries = fruits.entries();
console.log(fruitsIteratorEntries);

// Affiche la valeur suivante d'un setIterator
console.log(fruitsIteratorEntries.next()); // la propriété "done" de l'objet renvoyé est à false tant qu'on n'a pas atteint la fin
console.log(fruitsIteratorEntries.next());
if (fruitsIteratorEntries.next().done) {
    console.log('Iteration terminée');
}
else {
    console.log(fruitsIteratorEntries.next());
}



