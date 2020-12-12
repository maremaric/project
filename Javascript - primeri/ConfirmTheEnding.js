// Primer 1
function confirmEnding(str, target) {
    if(str.endsWith(target)) {
      return true;
    }
    return false;  
}
  
console.log(confirmEnding("Marko", "o"));
// ------------------------------------------------
// Primer 2
function confirmEnding(str, target) {
   
    // Option 1: return str.endsWith(target);
    // or
    // Option 2: return str.substr(-target.length) === target;
    // or with slice
    // Option 3: return str.slice(-target.length) === target;
}
  
console.log(confirmEnding("Marko", "o"));
// ------------------------------------------------
// Primer 3
function confirmEnding(str, target) {
    if(str.substr(-target.length) === target) {
        return true;
    }
    return false;
}
  
console.log(confirmEnding("Marko", "o"));
