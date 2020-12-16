
function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher(["burgers", "fries", "shake"], 1)); /* should return ["fries", "shake"] */

// var arr ["a", "b", "c", "d"];

// console.log(arr.splice(0, 2));
// console.log(arr);