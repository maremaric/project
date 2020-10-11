// Napisati funkciju koja niz obradjuje tako da ako je prvi clan niza
// paran broj koristi for petlju,a ako je neparan broj koristi while.


let niz = [1,2,3,4,5,6,7,8,9,10];
let niz1 = [23,44,5,61,1,3,4,99];
let niz2 = [40,23,1,100,576];


function forOrWhile(data) {
  if(data[0] % 2 === 0) {
    for(let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    console.log('Koristimo for petlju i prvi broj u nizu je paran.');
  } else {
    let i = 0;
    while(data[i]) {
    console.log(data[i]);
    i++;
  }
    console.log('Koristimo while petlju i prvi broj u nizu je neparan.');
  }
}

forOrWhile(niz);


