// Primer 1:

function findLongestWord(str) {

    var words = str.split(" ");
    var longest = "";

    for(var word of words) {
        if(word.length > longest.length) longest = word;
    }
    // return longest;
    return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log('------------------------------------------------------');


// Primer 2:

function findLoWo(str) {
    return str.split(" ").sort(function(a, b) {return b.length - a.length})[0];
}

console.log(findLoWo("The quick brown fox jumped over the lazy dog"));


