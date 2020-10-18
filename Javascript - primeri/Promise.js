
// Primer 1:
// const obecanje1 = new Promise((resolve,reject) => {
//     let suma = 0;
//     for(let i = 0; i < 1000000000; i++) {
//         suma += i;
//     }

//     resolve(suma);
// });

// obecanje1.then(rezultat => {
//     console.log('Stigao je rezultat: ', rezultat);
// });


// Primer 2:
// const obecanje2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let broj = (Math.random() * 5).toFixed(0);

//         if(broj <= 2) {
//             reject('Dobijen je nedozvoljen broj!');
//         }

//         resolve(broj);
//     }, 5000);
// });

// obecanje2.then(
//     broj => {
//         console.log('Vracen je obecani broj i on je: ', broj);
//     }, 
//     greska => {
//         console.log('Doslo je do greske: ', greska);
//     }
// );


// Primer 3:
// const obecanje2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let broj = (Math.random() * 5).toFixed(0);

//         if(broj <= 2) {
//             reject('Dobijen je nedozvoljen broj!');
//         }

//         resolve(broj);
//     }, 5000);
// });

// obecanje2
//     .then(broj => console.log(broj))
//     .catch(greska => console.log('Doslo je do greske: ', greska));

// obecanje2
//     .then(broj => console.log('Ovaj broj je uvecan za 1 je: ', Number(broj) + 1));

