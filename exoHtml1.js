let tab = ["Patate","Poireau","Cornichon","Salade","Tomate"];

window.addEventListener("load", function() {
    let btn = document.querySelector("button");
    let p = document.getElementById("parag");
    let i = 0;

    function changeWord(){
        i++;
        if(i>4){
            i=0;
        }
        p.textContent = tab[i];
    }

    btn.addEventListener("click", function() {
        document.body.style.backgroundColor = "red";
        changeWord();
    })

    setInterval(changeWord, 5000);
    
})