// Primer 1
function destroyer(arr) {

    var args = Array.from(arguments);
    args.splice(0,1);
    var targets = args;
    
    var result = [];

    for(var num of arr) {
        if(targets.indexOf(num) === -1) {
            result.push(num);
        }  
    }
    return result;
}

console.log(destroyer([1,2,3,1,2,3],2,3,1)); /* return [] */
// --------------------------------------------------
// Primer 2
function destroyer(arr) {

    var args = Array.from(arguments);
    args.splice(0,1);
    var targets = args;
    
    return arr.filter(function(num) {
        return targets.indexOf(num) === -1;
    });
}

console.log(destroyer([1,2,3,1,2,3],2,3)); /* return [1,1] */