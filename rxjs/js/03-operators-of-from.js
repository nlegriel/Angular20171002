// http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

// create observable with method of
let values = Observable.of('Hello', 'World', 2017);

// souscription
values.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('Completed:')
);

// l'opéarteur of crée un observable qui émet toutes les valeurs passées en arguments les unes après les autres et qui 
// termine par mettre une notification pour le complete


// Créer un observable à partir d'un tableau avec l'opérteur from
let fruitsArray = ['fraises','pommes','bananes'];
let fruitsObservable = Observable.from(fruitsArray);
fruitsObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('Completed:')
);

// créer un observable avec l'operateur from depuis une promise
// On va utiliser l'API GitHub pour récupérer les emojis
let url = "https://api.github.com/emojis";
let emojisObservable = Observable.from($.getJSON(url));
emojisObservable.subscribe(
    (emojis) => console.log(emojis),
    (error) => console.log(error),
    () => console.log('Completed:')
);
