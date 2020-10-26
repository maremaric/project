
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

// Primer 3:

function rvsString(str) {

  let final = '';

  for(let i = str.length - 1; i >= 0; i--) {
      final += str[i]
  }
  return final;
}


console.log(rvsString('stringJeOkrenut ):'));

// -------------------------------------
