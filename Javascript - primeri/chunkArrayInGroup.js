
// Primer 1
function chunkArrayInGroup(arr, size) {

    var groups = [];
    while(arr.length > 0) {
        groups.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return groups;
}

console.log(chunkArrayInGroup(['a', 'b', 'c', 'd'] , 2));

// ---------------------------------------------------------------
// Primer 2

function chunkArrayInGroup(arr, size) {

    var groups = [];
    while(arr.length > 0) {
        groups.push(arr.splice(0, size));
    }
    return groups;
}

console.log(chunkArrayInGroup(['a', 'b', 'c', 'd'] , 2));