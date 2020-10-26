
// Primer 1:
function reverseString(str) {

    let strArr = str.split("");
    let reverseStrArray = strArr.reverse();
    let reverseString = reverseStrArray.join("");
  
    return reverseString;
  
  }
  
  console.log(reverseString('hello'));
  
// -------------------------------------------------

// Primer 2:
function rString(str) {
  return str.split("").reverse().join("");
}

console.log(rString('zdravo'));

// -------------------------------------