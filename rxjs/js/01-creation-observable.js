let Observable = Rx.Observable;

// create observable
let values = Observable.create((observer) => {
    observer.next("Hello");
    observer.next("World");
    setTimeout(() => console.log('yello les zamis !'), 2000);
});

values.subscribe((data) => console.log(data));

// next() push des données
// la différence avec generator es6 c'est que le generator renvoie un iterator sur lequel la méthode next() récupère des
// données alors que next() sur observer push des données.

