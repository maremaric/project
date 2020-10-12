// Dat je niz stringova. Neki od tih stringova sadrze i cifre.

// Kreirati novi niz celih brojeva, koji iz pocetnok niza uzima
// samo one elemente koji sadrze cifre i izbacuje sve one znake koji nisu cifre.

// Primer: Ulazni niz: ["abc","1ab22x","5","5ga6","ayz",""] bi
// kao rezultat treablo da proizvede: [122,5,56]



var niz = ["abc","1ab22x","5","5ga6","ayz",""];
var noviNiz = [];

for(let i = 0; i < niz.length; i++) {

var niz1 = niz[i].replace(/\D/g, "");

if(niz1) {
  noviNiz.push(niz1);
}

var rezultat = noviNiz.map(Number);

}

console.log(rezultat);



