// En ES5
var greeting = function() {
    console.log('salut');
}

greeting();

// EN ES6
let arrowf = () => {
    console.log('salut');
}

// Encore plus simple*
let arrowf2 = () => console.log('salut');

arrowf();

// function with argg ES5
var fparam1 = function(arg1) {
    console.log('salut ' + arg1);
}

// En ES6
let fparam2 = (arg1) => console.log('salut ' + arg1);

// function with object ES5
var dog = {
    name: 'le chien',
    toys: ["ballon", "balle"],
    getToys: function() {
        var self = this;// pour eviter un probleme avec 'this'
        this.toys.forEach(function(toy) {
            var sentence = self.name + " joue avec 1 " + toy;
            console.log(sentence);
        });
    }
}

dog.getToys();

// function with object ES6
var dog2 = {
    name: 'le chien',
    toys: ["ballon", "balle"],
    getToys: function() {
        this.toys.forEach((toy) => {
            var sentence = this.name + " joue avec 1 " + toy;
            console.log(sentence);
        });
    }
}

dog2.getToys();



