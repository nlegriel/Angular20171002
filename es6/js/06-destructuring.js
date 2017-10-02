// En ES5
var fruits = ['fraise', 'banane', 'poire', 'pomme'];
console.log(fruits[0]);
console.log(fruits[2]);

// En ES6
let [straberry,,,apple] = ['fraise', 'banane', 'poire', 'pomme'];
console.log(straberry);
console.log(apple);

// En ES5
var dog = {
    name: 'le chien',
    age: 1,
    color: 'noir'
}

console.log(dog.age);
console.log(dog.color);

// En ES6
let {name, color} = {
    name: 'le chien',
    age: 1,
    color: 'noir'
}
console.log(name);
console.log(color);

