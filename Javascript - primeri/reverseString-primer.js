
// Primer 1:
function reverseString(str) {

    let strArr = str.split("");
    let reverseStrArray = strArr.reverse();
    let reverseString = reverseStrArray.join("");
  
    return reverseString;
  
  }
  
  console.log(reverseString('hello'));
  
// -------------------------------------------------