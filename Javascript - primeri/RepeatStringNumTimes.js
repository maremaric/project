// Primer 1
function repeatStringNumTimes(str, num) {
    if(num < 0) return "";
    return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3));
// ---------------------------------------------
// Primer 2
function repeatStringNumTimes(str, num) {
    var final = "";
    if(num < 0) return "";
    for(var i = 0; i < num; i++) {
        final += str;
    }
    return final;
}

console.log(repeatStringNumTimes("abc", 3));
// ----------------------------------------------
// Primer 3
function repeatStringNumTimes(str, num) {
    if(num < 0) return "";
    
    if(num === 1) return str;

    return str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes("abc", 3));