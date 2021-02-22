const scanf = require('scanf');
console.log("Veuillez rentrer un nombre");
let a = scanf('%d');
let res = 0;
for (i = 0; i<a+1 ; i++){
    res = res + i;
}
console.log(res);