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


