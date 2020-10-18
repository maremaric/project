for(let i = 0; i < 10; i++) {
    let poruka = "Ovo je broj: " + (i + 1);
    console.log(poruka);
}

console.log('-----------------------------------------------');

for(let broj = 5; broj < 14; broj += 3) {
    console.log(broj);
}

console.log('-----------------------------------------------');

for(let i = 100; i > -50; i -= 6) {
    console.log(i);
}

console.log('-----------------------------------------------');

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('-----------------------------------------------');

let niz = ["Beograd","Nis","Novi Sad","Valjevo","Kragujevac","Sombor"];


for(let i = 0; i < niz.length; i++) {
  let grad = niz[i];
  let duzinaNaziva = grad.length;
  console.log(grad,duzinaNaziva);

}

console.log('-----------------------------------------------');

for(let grad of niz) {
    let duzinaNaziva = grad.length;
    console.log(grad,duzinaNaziva);
}

console.log('-----------------------------------------------');

for(let [ index, grad ] of niz.entries() ) {
    let duzinaNaziva = grad.length;
    console.log(index,grad,duzinaNaziva);
}

console.log('-----------------------------------------------');

let suma = 0;

for(let grad of niz) {
    suma += grad.length;
}

let srVr = suma / niz.length;

console.log('Prosecna duzina naziva grada je:', srVr);

console.log('-----------------------------------------------');

const tajniBroj = 7;

while(true) {
    let pogodjeniBroj = (Math.random() * (10 - 1) + 1).toFixed(0);

    console.log('Pokusavamo sa brojem:', pogodjeniBroj);

    if(pogodjeniBroj == tajniBroj) {
        break;
    }
}

console.log('-----------------------------------------------');

let pogodak = 0;

while(pogodak != tajniBroj) {
    pogodak = (Math.random() * (10 - 1) + 1).toFixed(0);

    console.log('Pokusavamo sa brojem:', pogodak);
}

console.log('-----------------------------------------------');

for(let grad of niz) {
    console.log('Proveravamo grad: ',grad);

    if(grad.includes('l')) {
        break;
    }
}

console.log('-----------------------------------------------');


