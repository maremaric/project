const { clearInterval } = require("timers");

let broj = 0;

function uvecajBroj() {
    broj++;
    console.log(broj);
}

let intervalId = setInterval(uvecajBroj,3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Prekid');
}, 13000);

