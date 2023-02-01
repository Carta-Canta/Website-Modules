//Genero la dropdown
const dropdown=document.getElementById("games");
let element="";
for(let i=0;i<cruciverba.length; i++){
    element = "element"+i;
    dropdown.innerHTML+=`<a id=${element} href="#">${cruciverba[i].Nome}</a>`;
}
//Imposto la larghezza minima del contenuto della dropdown in base alla larghezza del bottone
let btn = document.querySelector(".dropdownBtn");
let widthBtn = btn.clientWidth +"px";
dropdown.style.minWidth = widthBtn;

//Aggiungo gli EventListener alla dropdown
for(let i=0;i<cruciverba.length; i++){
    element = "element"+i;
    let x = cruciverba[i].x;
    let y = cruciverba[i].y;
    let nome = cruciverba[i].Nome;
    document.getElementById(element).addEventListener("click", () => {
        generate(x, y, nome);
    });
}

//Funzione per mostrare il contenuto della dropdown
function showGames(){
    document.getElementById("games").style.display="block";
}

//faccio in modo che quando si clicca l'immagine nel bottone mostri i giochi
document.getElementById("caret-down").addEventListener("click", () =>{
    showGames();
});

//Nascondo i contenuti della dropdown se clicco nello schermo
window.addEventListener("click", (event)=>{
    if ((!event.target.matches('.dropdownBtn')) && (!event.target.matches('.caret-down'))) {
        document.getElementById("games").style.display="none";
    }
})

//Genero la tabella del cruciverba in base ai parametri passati alla funzione
function generate(x,y, type){
    document.getElementById("game").replaceChildren();
    let j=0;
    let sol = eval("righe"+type);
    for(let i=0; i<y; i++){
        for(let k=0; k<x; k++){
            let id="x"+k+","+"y"+i;
            if(sol[i][k]==s){
                document.getElementById("game").innerHTML+=`<nobr><input disabled type="text" id=${id} class="space" value="${s}" size="1" maxlength="1" spellcheck="false">&nbsp;</nobr>`;
            }else{
                document.getElementById("game").innerHTML+=`<nobr><input type="text" id=${id} value="" size="1" maxlength="1" spellcheck="false">&nbsp;</nobr>`;
                document.getElementById(id).addEventListener("click", ()=>{
                    document.getElementById(id).style.borderColor="black";
                });
            }
            j++
        }
        document.getElementById("game").innerHTML+=`<br>`
    }
    document.getElementById("game").innerHTML+=`<button type="submit" onclick="checkSolution('${type}','${x}','${y}')">Controlla</button>`
}