// Primer 1
function mutation(arr) {
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();

    for(var i = 0; i < secondWord.length; i++) {
        if(firstWord.indexOf(secondWord[i]) === -1 ) return false;
    }
    return true;
}

console.log(mutation(["hello", "he"]));


// var greeting = "hello";
// console.log(greeting.indexOf("k") === -1);

// ---------------------------------------------------------------------
// Primer 2
function mutation(arr) {
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();

    for(var letter of secondWord) {
        if(firstWord.indexOf(letter) === -1) return false;
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
// ----------------------------------------------------------------------
// Primer 3
function mutation(arr) {
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();

    for(var letter of secondWord) {
        if(!firstWord.includes(letter)) return false;
    }
    return true;
}

console.log(mutation(["hello", "hey"]));