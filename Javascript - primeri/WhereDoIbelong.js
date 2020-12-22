function getIndexToIns(arr, num) {

    arr.sort(function(a, b) {
        return a- b;
    });

    for(var i = 0; i < arr.length; i++) {
        if(num <= arr[i]) {
            return i;
        }
    }

    return arr.length;
}


console.log(getIndexToIns([40, 60, 5], 50));

// var things = ["a", "b", "c", 19, 2];
// console.log(things.sort());