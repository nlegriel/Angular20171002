console.log('Je vais à une formation Angular');
let myPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        let message = 'Bravo vous êtes reçu ';
        resolve(message);
        //reject('Désolé viré !');
    }, 5000);
});

console.log('Je sors de cette formation');

myPromise.then((data) => {
    console.log(data);
});

console.log('Après plein de choses');
