let glasses = [1, 1, 2, 3, 3, 3, 2, 2, 1, 1];
let counter = 0;

function brothersInTheBar(glasses) {
  for (let i = 0; i < glasses.length; i++) {
    if(glasses[i] == glasses[i + 1] && glasses[i + 1] == glasses[i + 2]) {

      glasses.splice(i, 3);

      counter++;
      brothersInTheBar(glasses);
    }
  }
}

brothersInTheBar(glasses);


console.log(counter);
console.log(glasses);
