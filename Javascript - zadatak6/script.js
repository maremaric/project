// Dat je niz pbjekata od kojih svaki ima format oblika: {start:10,kraj:15}. 
// Svaki od ovih objekata reprezentuje vremena pocetka i kraja casa, 
// izrazeno u minutima. Ako se dva intervala preklapaju, potrebne su dve ucionice. 

// Odrediti koliko je minimalno ucionica potrebno da bi se sproveli svi casovi.

// Primeri: let vremena = [
//     {start: 10,kraj: 15},
//     {start: 20,kraj: 30}
// ]
// zahteva jednu ucionicu. 
// [
//     {start: 10,kraj: 25},
//     {start: 20,kraj: 30}
// ]
// zahteva dve ucionice .
// [
//     {start: 10,kraj: 20},
//     {start: 30,kraj: 40},
//     {start: 15,kraj: 25}
// ]
// zahteva dve ucionice.
// [
//     {start: 10,kraj: 25},
//     {start: 20,kraj: 40},
//     {start: 35,kraj: 50}
// ]
// zahteva tri ucionice.

let vremena = [
    { start: 10, kraj: 25},
    { start: 20, kraj: 40},
    { start: 35, kraj: 50}
];

let vremena1 = [
    { start: 10, kraj: 15},
    { start: 20, kraj: 40},
    { start: 35, kraj: 50}
];

checkIntervals(vremena);

function checkIntervals(niz){

var brUcionica = 1;

for(var i = 0; i < niz.length; i++){
    for(var j = i + 1; j < niz.length; j++) {
        if((niz[j].start <= niz[i].start && niz[j].kraj >= niz[i].start)
            || (niz[j].start <= niz[i].kraj && niz[j].kraj >= niz[i].kraj)
            || (niz[j].start >= niz[i].start && niz[j].kraj <= niz[i].kraj)
        )
        brUcionica++;
    }
}
console.log("Broj učionica: " + brUcionica);
}



