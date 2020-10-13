// Dat je string koji bi trebalo da predstavlja aritmeticki izraz.

// Uraditi validaciju datog izraza bez upotrebe regularnih izraza (RegEx), 
// odnosno parsiranjem stringa karakter, po karakter. 

// Izraz smatramo validnim ako zadovoljava sledece kriterijume: 
// sadrzi samo: cancelAnimationFrame,male zagrade i znake +,-,* i /, eventualno blanko znake 
// svaka otvorena zagrada ima i zagradu koja je zatvara u cilju lakse 
// implementacije, decimalne brojeve ne tretiramo (sto se takodje vidi i iz definicije sta izraz sme da sadrzi)

// Primer: String "4 * ((12 * 3) + 35)" predstavlja ispravan izraz, dok:
// String "4 * ((12 * 3)) + 35)" predstavlja neispravan izraz. 
// Izraz ne treba izracunavati, vec samo validirati u skladu sa zadatim pravilima, 
// i obavezno, prolazeci kroz string karakter po karakter u petlji.

var digits = ["0","1","2","3","4","5","6","7","8","9"];
var signs = ["+","-","*","/"];
var string = "4 * 12 * 3 + 35";


  if(validate(string))
      console.log("validan!")
    else
      console.log("nevalidan!");


function validate(string){

  var lastChar=string[0];

  var char = "";

  for(var i = 0; i < string.length; i++){

      char = string[i];

      if(char == " ")

          continue;

      if(!(digits.includes(char) || signs.includes(char)))

          return false;

      if(signs.includes(char) && !digits.includes(lastChar))

          return false;

      lastChar = char;

console.log(lastChar);

  }

  return true;
}

