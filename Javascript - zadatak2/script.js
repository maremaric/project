// Na koje se sve nacine moze isprazniti niz u Javascriptu?
// Navesti sve ideje kojih se setite na temu - kako biste ispraznili
// niz da to treba da uradite u realnom primeru.


// Primer 1: 

var niz = ['a','b','c','d','e','f'];

niz = [];

console.log(niz); 


// Primer 2: 

var niz = [1,2,3,4,5];

function isprazniNiz() {
    niz = [];
}

isprazniNiz();

console.log(niz);


// Primer 3: 

var niz = [1,2,3,4,5];

niz.length = 0;

console.log(niz);


// Primer 4:

niz = [1,2,3,4,5];

while(niz.length > 0) {
  niz.pop();
}

console.log(niz);

// Primer 5:

var niz = [1, 2, 3, 4, 5];
for (var i = niz.length; i > 0; i--) {
 niz.pop();
}
console.log(niz); 


