let books = new Map();

books.set('Umberto Eco', 'Le nom de la rose');
books.set('Michel Tournier', 'Le roi des Aulnes');
console.log(books);
// propriété size pour récupérer la taille d'une Map
console.log(books.size);

// méthode get pour lire valeur d'une Map en lui passant une clé
console.log(books.get('Umberto Eco'));

// méthode forEach
books.forEach(function(cle, valeur, touteLaMap) {
    console.log(cle);
    console.log(valeur);
    console.log(touteLaMap);
});

// retournent des map iterators :
console.log(books.keys());
console.log(books.values());
console.log(books.entries());
