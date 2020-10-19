
class Igrac {
    constructor(ime) {
        this.ime = ime;
        this.x = 0;
        this.y = 0;
    }

    getIme() {
        return this.ime;
    }

    getLocation() {
        return [
            {x: this.x},
            {y: this.y}
        ]
    }

    moveTo(newX,newY) {
        this.x = newX;
        this.y = newY;
    }
}

let zeka = new Igrac('Zekan');

zeka.moveTo(31.2,3.45);
console.log(zeka.getLocation());

zeka.moveTo(20.11,7.85);
console.log(zeka.getLocation());

