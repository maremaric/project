
const student = {
    index: 213123123,
    ime: 'Marko',
    prezime: 'Maric',
    ocene: [
        { predmet: 'Programiranje 1', ocena: 10 },
        { predmet: 'Baze podataka', ocena: 10 },
        { predmet: 'Osnovi ekonomije', ocena: 9 },
        { predmet: 'Informatika', ocena: 10 },
        { predmet: 'Kriptologija', ocena: 8 }
    ]
}

student.ocene.push( { predmet: 'Programiranje 2', ocena: 10 } );

console.log('-------------------------------------------------');

console.log(student);

console.log('-------------------------------------------------');

// const kljuceviObjekta = Object.getOwnPropertyNames(student);

// for(let kljuc of kljuceviObjekta) {
//     let podatak = student[kljuc];
//     console.log('Naziv kljuca je', kljuc, 'i pod tim kljucem je',podatak);
// }

console.log('-------------------------------------------------');

const jsonZapisStudenta = JSON.stringify(student);

console.log(jsonZapisStudenta);

console.log('-------------------------------------------------');

