const scanf = require('scanf');
console.log("Veuillez saisir une chaîne");
let c1 = scanf('%s');
console.log("Veuillez saisir la seconde chaîne");
let c2 = scanf('%s');
if(c1.length >= 2*c2.length){
    console.log("la première chaîne est deux fois plus longue que la deuxième");
}else{
    console.log("la première chaîne n'est pas deux fois plus longue que la deuxième");
}