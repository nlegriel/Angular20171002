// http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

let interval = Observable.interval(500)  // observalbe qui émet toutes les 500 ms
                        .map(x => x * 10)
                        .take(10); // operateur qui arrête l'émission après 10 itérations

interval.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('Completed!')
);

// map() se comporte comme en js
let numbers = [0,1,2,3,4];
console.log(numbers.map(x => x * 10));


let myString = "Aujourd'hui on voit les Observables avec RxJs";
let timer = Observable.timer(3000, 100) // 1er argument = délai, 2e argument = intervalle
                    .do(x => console.log('avant map ', x))
                    .map(x => myString[x])
                    .do(x => console.log('après map ', x))
                    .take(myString.length);

let container = document.querySelector('#container');
timer.subscribe(
    (value) => container.innerHTML += value,
    (error) => console.log(error),
    () => console.log('completed !')
);
