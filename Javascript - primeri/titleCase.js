
// Primer: 1

function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log(titleCase("I'm a Little Tea Pot")); // print: i'm a little tea pot

console.log('----------------------------------');

// Primer: 2

function tCase(str) {
    var titled = str.toLowerCase().split(" ").map(function(elem) {
        return elem[0].toLowerCase() + elem.slice(1);
    })
    return titled.join(" ");
}

console.log(tCase("I'm A Little Tea Pot")); // print: i'm a little tea pot
