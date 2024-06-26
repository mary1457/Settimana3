const mytask = document.getElementById("mytask");
const regtask = document.getElementById("regtask");
const btnsubmit = document.getElementById("btnsubmit");
const elenco = document.getElementById("elenco");

btnsubmit.addEventListener("click", function(e) {
    e.preventDefault();
    let testo = regtask.value;
    let p = document.createElement("p");
    p.innerText = testo;
    p.addEventListener("click", function (){
     if (p.style.textDecoration === "") {
        p.style= "text-decoration:line-through";
    }
    else {p.style.textDecoration = ""};
    
    console.log(p.style.textDecoration);
    });

    let btndelete = document.createElement("button")
    btndelete.textContent="delete";
    btndelete.addEventListener("click", function(){
    elenco.removeChild(p);
    elenco.removeChild(btndelete);
    })
    elenco.appendChild(p);
    elenco.appendChild(btndelete);
})
