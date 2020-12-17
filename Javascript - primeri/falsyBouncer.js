// Primer 1
function bouncer(arr) {
    var truthies = [];

    for(var elem of arr) {
        if(elem) truthies.push(elem);
    }
    return truthies;
}

console.log(bouncer([7, "ate", "", false, 9]));
// ------------------------------------------------------
// Primer 2
function bouncer(arr) {
    return arr.filter(function(elem) {
        return elem;
    });
}

console.log(bouncer([7, "ate", "", false, 9, "hey", undefined, 0]));

// var nums = [1,2,3,4,5,6];

// nums.filter(function(item) {
//     return item > 4;
// });