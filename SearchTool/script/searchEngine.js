let risultatoRicerca=""; // testo da mostrare in alto (Risultati ricerca: , La ricerca non ha prodotto risultati)
let defaultPage=document.getElementById("articoli").innerHTML;

function search(){
    document.getElementById("spunta").style.display="none";
    document.getElementById("err").style.display="none";
    //Ricarico il div di default
    document.getElementById("articoli").innerHTML=defaultPage;
    let query = document.getElementById("query").value;
    let results = []; //array id div risultati ricerca
    if(query){
        document.getElementById("contatoreRisultati").style.display="none";
        $("#loading").css("display","block");
        //$(".articoli *").removeClass("found"); // rimuovo la classe found da tutti gli articoli in modo tale da annullare le formattazioni delle precedenti ricerche
        $(".articoli").css("display","none"); // nascondo il div degli articoli in modo tale da evitare l'uscita del messaggio la pagina non risponde
        $(".articoli *").css("display","none"); // nascondo tutti gli elementi del div degli articoli
        //Con il timeout evito che in caso ci sia una grande quantità di articoli lo spinner non giri
        setTimeout(()=>{
            let pageElements = document.getElementById("articoli").children;
            let element = "";
            let elementID = "";
            let content=""; //testo
            let replace="";
            //Carico l'array dei risultati
            for (var i = 0; i<pageElements.length; i++){
                elementID = pageElements[i].id;
                element = document.getElementById(elementID).children;
                for (var k = 0; k<element.length; k++){
                    content = element[k].innerText;
                    if(content.toLowerCase().includes(query.toLowerCase())){ 
                        let regExp = new RegExp("(" + query + ")(?!([^<]+)?>)", "gi"); // ignoro i tag con regexp;
                        replace = element[k].innerHTML.replace(regExp, '<span class="found">$&</span>'); //mantengo le maiuscole e le minuscole
                        document.getElementById(elementID).children[k].innerHTML=`${replace}`;
                        results.push(elementID);
                    } 
                }
            }

            //Mostro i risultati
            if(results.length>0){
                risultatoRicerca="<h1>Risultati ricerca:</h1>"
                for (let i = 0; i<results.length; i++){
                    $(`#${results[i]}`).css("display","");
                    $(`#${results[i]} *`).css("display","");          
                }
            }else{
                risultatoRicerca="<h1>La ricerca non ha prodotto risultati</h1>"
            }
            
            //Mostro il div padre degli articoli e il contatore risultati
            setTimeout(()=>{
                document.getElementById("contatoreRisultati").innerHTML=risultatoRicerca;
                document.getElementById("contatoreRisultati").style.display="block";
                $(".articoli").css("display","block");
            },1)
            //Nascondo lo spinner e mostro la spunta
            setTimeout(()=>{
                document.getElementById("loading").style.display="none";
                document.getElementById("spunta").style.display="block";
            },200);
            //Nascondo la spunta
            setTimeout(()=>{
                document.getElementById("spunta").style.display="none";
            },1500);
        },1);  
    }else{
        setTimeout(()=>{
            document.getElementById("loading").style.display="none";
            return;
        },200);
        
    }
}
//Quando si clicca il bottone avvia la ricerca
document.getElementById("searchBtn").addEventListener("click", () =>{
    try{
        search();
    }catch(e){
        console.log(e);
        document.getElementById("loading").style.display="none";
        document.getElementById("err").style.display="block";
        setTimeout(()=>{
            alert("Si è verificato un errore durante la ricerca");
            document.getElementById("err").style.display="none";
        }, 1)
    }   
});

//Se si preme invio nell'input avvia la ricerca
$("#query").on('keyup', (e) => {
    if (e.keyCode === 13) {
        try{
            search();
        }catch(e){
            console.log(e);
            document.getElementById("loading").style.display="none";
            document.getElementById("err").style.display="block";
            setTimeout(()=>{
                alert("Si è verificato un errore durante la ricerca");
                document.getElementById("err").style.display="none";
            }, 1)
        }   
    };
});