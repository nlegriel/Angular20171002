// Permet de créer des fonctions qu'on peut mettre en pause et faire repartir à  l'endroit où on s'est arrêté
function* misc() {
    let a = 10;
    let b = 15;
    console.log(a + b);
    yield;
    console.log('Atteint à la 2e exécution')
    yield;
    console.log('Atteint à la 3e exécution')
}

// Un generator retourne un iterator
let miscIterator = misc();

miscIterator.next(); // Affiche 25
miscIterator.next(); // Affiche Atteint à la 2e exécution
miscIterator.next(); // Affiche Atteint à la 3e exécution

function* decollage() {
    yield 'trois';
    yield 'deux';
    yield 'un';
    yield 'zéro';
    yield 'décollage';
}

let monIterator = decollage();
let handle = setInterval(() => {
    let instruction = monIterator.next();
    if (instruction.done) {
        clearInterval(handle);
    }
    else {
        console.log(instruction);
    }
}, 2000);
