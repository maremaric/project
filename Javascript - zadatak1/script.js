// Dat je niz stringova
// Izracunati zbir brojeva sadrzanih u onim stringovima 
// koji mogu da se tretiraju kao brojevi:

let nizBrojeva = ["aa"," ","12","assd23","5","a6d","8"];
let s = 0;


for(let i = 0; i < nizBrojeva.length; i++) {
  
  let b = Number(nizBrojeva[i])

  if(!isNaN(b)) {
    s = s + b;
  }

}

console.log(s);

