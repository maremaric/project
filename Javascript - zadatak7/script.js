// Dat je string koji sadrzi samo slova engleske abecede i to samo velika slova. 

// Implementirati enkodiranje i dekodiranje tog stringa tako da se pri enkodiranju svako 
// visestruko pojavljivanje slova enkodira kao broj koji predstavlja koliko se 
// puta slovo pojavljuje, a potom samo slovo. Ako se slovo pojavljuje 
// samo jednom, onda se u enkodiranom stringu to pojavljuje kao samo 
// jedno pojavljivanje tog slova, bez navodjenja broja 1. 

// Primer: Ako je string na primer: "AAAABBBXYCCDAA", 
// enkodirani oblik bi bio: 4A3BXY2CD2A


var string = "AAAABBBXYCCDAA";

string = encode(string);
console.log(string);
string = decode(string);
console.log(string);

function encode(string){
var result = "";
var char = string[0];
var num = 1;
for(var i = 1; i < string.length; i++){
    if(char === string[i]){
        num++;			
    }else{
        if(num == 1)
            result += char;
        else
            result += num+char;
        char = string[i];
        num = 1;
    }
}

if(num == 1)
    result += char;
else
    result += num+char;
return result;
}

function decode(string){
var result = "";
var num = 1;
var char = "";

for(var i = 0; i < string.length; i++){
    char = string[i];
    if(char.match(/[1-9]/g) != null){
        num = char;	 		
    }else{
        for(var j = 0; j < num; j++)
            result += char;
        num = 1;
    }
}
return result;
}

