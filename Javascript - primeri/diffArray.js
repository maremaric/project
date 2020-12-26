// Primer 1
function diffArray(arr1, arr2) {
    var result = [];

    for(var i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }

    for(var j = 0; j < arr2.length; j++) {
        if(arr1.indexOf(arr2[j]) === -1) {
            result.push(arr2[j]);
        }
    }
    return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// ----------------------------------------------------------------
// Primer 2
function diffArray(arr1, arr2) {
    var combo = arr1.concat(arr2);

    return combo.filter(function(num) {
        if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
            return num;
        }
    });
}

console.log(diffArray([1, 2, 3], [4, 3, 6]));