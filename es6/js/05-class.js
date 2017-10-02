// En ES5
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

var myCar = new Car('BMW', 'Rouge');

console.log(myCar);

Car.prototype.klaxone = function() {
    console.log('tuuut');
}

myCar.klaxone();

console.log('-----------------------------');

// ES6
class Vehicule {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    klaxone() {
        console.log('taaaaaat');
    }
}

let myVehicule = new Vehicule('Merceds', 'Black');
console.log(myVehicule);
myVehicule.klaxone();

console.log('-----------------------------');

class VoitureDeCourse extends Vehicule {
    constructor(brand, color, vitesse) {
        super(brand, color);
        this.vitesse = vitesse;
    }

    turbo() {
        console.log('mise en route du turbo');
    }

    klaxone() {
        console.log('tatt');
    }
}


let myCourseVehicule = new VoitureDeCourse('Ferrari', 'Rouge', '250');
console.log(myCourseVehicule);
myCourseVehicule.turbo();
myCourseVehicule.klaxone();
