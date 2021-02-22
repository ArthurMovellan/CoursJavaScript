const scanf = require('scanf');
let tab = [];
let i = 0;
console.log ("Veuillez saisir 5 entiers");
while (i<5) {
    tab.push(scanf('%d'));
    i++
}
let max = 0;
let moy = 0;
let sum = 0;
for (j = 0 ; j < 5 ; j++){
    if (tab[j] > max) {
        max = tab[j];
    }
    sum = sum + tab[j];
}
moy = sum/5;
console.log ("le maximum est " + max);
console.log ("la moyenne est de " + moy);
