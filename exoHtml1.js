let tab = ["Patate","Poireau","Cornichon","Salade","Tomate"];
let tabC = ["red","blue","green"];

window.addEventListener("load", function() {
    let btn = document.querySelector("button");
    let p = document.getElementById("parag");
    let i = 0;
    let j = 0;

    function changeWord(){
        i++;
        if(i>4){
            i=0;
        }
        p.textContent = tab[i];
    }

    function changeColor(){
        j++;
        if(j>2){
            j=0;
        }
        document.body.style.backgroundColor = tabC[j];
    }

    btn.addEventListener("click", function() {
        changeColor();
        changeWord();
    })

    setInterval(changeWord, 5000);
    
})