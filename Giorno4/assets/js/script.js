
const tabella = document.getElementById("tabella");
const bottone = document.getElementById("bottone");
const tabelline = document.getElementById("tabelline");
const bottone2 = document.getElementById("bottone2");
const appTabelline = document.getElementById("appTabelline");
const numeriEstratti = [];
window.addEventListener("load", init());
function init() {
    creaTabella();

}
function creaTabella() {
    for (let i = 1; i <= 90; i++) {
        const cellTabella = document.createElement("div");
        cellTabella.innerText = i;
        cellTabella.classList.add ("n"+i);
        tabella.appendChild(cellTabella);
    }
}
function creaTabelline() {
    const arrayTabelline = [];
     const contenitoreTabelline = document.createElement("div");
     contenitoreTabelline.id= "tabelline"
    for (let i = 1; i <= 15; i++) {
        const cellTabelline = document.createElement("div");
        
        let numeroCasuale;
        do {
            numeroCasuale = Math.floor(Math.random() * 90) + 1;
        } while (arrayTabelline.includes(numeroCasuale));
        arrayTabelline.push(numeroCasuale);
        cellTabelline.innerText = numeroCasuale;
        cellTabelline.classList.add("n"+numeroCasuale);
        contenitoreTabelline.appendChild(cellTabelline);

    }
    appTabelline.appendChild(contenitoreTabelline);
}

bottone.addEventListener("click", function () {
    let numeroCasuale;
    do {
        numeroCasuale = Math.floor(Math.random() * 90) + 1;
    } while (numeriEstratti.includes(numeroCasuale));


    numeriEstratti.push(numeroCasuale);
    const cellTabella = document.querySelectorAll(".n"+numeroCasuale);
    for (let i = 0; i<cellTabella.length; i++){
        cellTabella[i].classList.add("red")
    }
    
    console.log(cellTabella);
    console.log(numeriEstratti);
})

bottone2.addEventListener("click", function() {
    const numeroTabelline = tabelline.value;
    for (let i = 1; i<=numeroTabelline; i++) {
        creaTabelline ();
    }
   
})
