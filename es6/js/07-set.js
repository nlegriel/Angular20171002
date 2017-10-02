let brands = new Set();

brands.add('Honda')
    .add('Ducati')
    .add('Triomph')
    .add('Honda')
    .add('Kawazaki');

console.log(brands); // Affiche une seule fois Honda

// Créer un Set() directement à partir d'un tableau
let brandsArray = ['Honda', 'Ducati', 'Triomph'];
let brands2 = new Set(brandsArray);

console.log(brands2);

// méthode has pour tester si un set contient une valeur
console.log(brands.has('Honda')); // true
console.log(brands.has('honda')); // false

// méthode delete pour supprimer une entrée
console.log(brands.delete('Honda')); // supprime et retourne true
console.log(brands);
console.log(brands.delete('honda')); // ne supprime rien et retourne false
console.log(brands);

// methode forEach pour lister un Set
brands.forEach(function(cle, valeur, toutLeSet) {
    console.log(cle);
    console.log(valeur);
    console.log(toutLeSet);
});
// (la 'cle' est égale à la 'valeur' pour le cas d'un Set)
