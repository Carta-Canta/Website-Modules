//Dettagli cruciverba (Nome, numero caselle)
const cruciverba=[
    {"Nome":"Base1","x":21,"y":19},
    {"Nome":"Intermedio1","x":16,"y":16},
    {"Nome":"Avanzato1","x":25,"y":38}
]
const definizioni=
[
    {
        "BASE1":{
            "orizzontali":
            [
                {"text":"Organo rappresentativo a cui fu affidato il potere di deliberare la nuova Costituzione"},
                {"text":"Forma di governo in cui il potere viene esercitato dal popolo"},
                {"text":"Corpo legislativo o assemblea legislativa dello stato"},
                {"text":"Corrente politica dell'unione federale fra srari con caratteristiche comuni"}
            ],
            "verticali":
            [
                {"text":"Trasmissione formale del potere tra chi detiene la sovranità in uno stato"},
                {"text":"Insieme di funzionari pubblici che operano per conto del governo"}
            ]
        },
        "INTERMEDIO1":{
            "orizzontali":
            [
                {"text":"Condizione in cui un individuo può esprimersi, pensare e agire"},
                {"text":"Ogni cittadino ne ha molti"},
                {"text":"Possono essere privati o pubblici"},
                {"text":"Possono essere giuridiche o non giuridiche"},
                {"text":"È un complesso di regole"}
                
                
            ],
            "verticali":
            [
                {"text":"Persone che fanno parte di uno Stato o una città"},
                {"text":"L'Italia è una Repubblica fondata sul..."},
                {"text":"Il complesso di beni di una persona"},
                {"text":"Può essere pecuniaria, restrittiva o detentiva"},
                {"text":"È la conoscenza di un individuo"}
            ]
        },
        "AVANZATO1":{
            "orizzontali":
            [
                {"text":"Forma di Stato dell’Italia"},
                {"text":"Tutti i cittadini hanno pari dignità sociale e sono uguali davanti alla …"},
                {"text":"Insieme formano la Costituzione (singolare)"},
                {"text":"La Repubblica tutela gli ecosistemi, la biodiversità e l’... nell’interesse delle future generazioni"},
                {"text":"Insieme di norme non giuridiche"},
                {"text":"La Repubblica riconosce a tutti i … il Diritto al lavoro"},
                {"text":"Coloro che fanno parte del Senato"},
                {"text":"La forma di Repubblica in cui il potere è in mano al popolo"},
                {"text":"Accordi vincolanti tra paesi dell’UE"},
                {"text":"Gruppo di individui coscienti di una propria peculiarità Culturale e Storica"},
                {"text":"Possono essere giuridiche e compongono l’Ordinamento"},
                {"text":"Persona proveniente dall’estero"},
                {"text":"Che riguarda il mondo intero"},
                {"text":"L’insieme delle varie specie presenti in uno specifico ecosistema"},
                {"text":"Scontro tra due o più stati"},
                {"text":"Piccolo paragrafo in un articolo della Costituzione"},
                {"text":"Atto che va contro le Norme giuridiche e infligge danni a qualcuno o a qualcosa"}
            ],
            "verticali":
            [
                {"text":"Il corpo legislativo o assemblea legislativa dello stato"},
                {"text":"L’Italia è una repubblica fondata sul ….."},
                {"text":"È formata da 139 articoli"},
                {"text":"Contrario di dovere"},
                {"text":"Rispetto dell’uomo verso se stesso e verso gli altri"},
                {"text":"La Repubblica richiede l’adempimento dei doveri inderogabili  di solidarietà …"},
                {"text":"Lo è la bandiera Italiana"},
                {"text":"Insieme di norme giuridiche vigenti in uno stato"},
                {"text":"La possibilità di votare a tutte le persone maggiorenni"},
                {"text":"Berlusconi,Salvini, Fratoianni … sono a capo di …"}
            ]
        }
    }
]

var s="\u9824";

//IMPORTANTE! il nome della variabile deve essere righe+NOME
const righeBASE1=
[
    `${s}${s}${s}${s}${s}PADRICOSTITUENTI`,
    `${s}${s}${s}${s}${s}${s}${s}${s}A${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}P${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}P${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}DEMOCRAZIA${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}E${s}${s}${s}M${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}S${s}${s}${s}M${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}E${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}N${s}${s}${s}N${s}${s}${s}${s}${s}${s}${s}${s}`,
    `PARLAMENTO${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}A${s}${s}${s}S${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}N${s}${s}${s}T${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}Z${s}${s}${s}R${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}A${s}${s}${s}A${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}Z${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}FEDERALISMO${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}O${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}N${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}E${s}${s}${s}${s}${s}${s}${s}${s}`
]

const righeINTERMEDIO1=
[
    `C${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `I${s}LIBERTÀ${s}${s}${s}${s}${s}${s}${s}`,
    `T${s}A${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `T${s}V${s}${s}P${s}${s}${s}S${s}${s}${s}${s}${s}${s}`,
    `A${s}O${s}${s}A${s}${s}${s}A${s}${s}${s}${s}${s}${s}`,
    `DIRITTI${s}ENTI${s}${s}${s}${s}`,
    `I${s}O${s}${s}R${s}${s}${s}Z${s}${s}${s}${s}${s}${s}`,
    `N${s}${s}${s}${s}I${s}${s}${s}I${s}${s}${s}${s}${s}${s}`,
    `I${s}${s}${s}${s}M${s}${s}${s}O${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}O${s}${s}${s}N${s}${s}${s}${s}C${s}`,
    `${s}${s}${s}${s}${s}NORME${s}${s}${s}${s}U${s}`,
    `${s}${s}${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}L${s}`,
    `${s}${s}${s}${s}${s}ORDINAMENTO`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}U${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}R${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}A${s}`
]

const righeAVANZATO1=
[
    `${s}${s}${s}${s}${s}P${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}A${s}${s}${s}${s}${s}${s}${s}${s}LEGGE${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}REPUBBLICA${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}L${s}${s}${s}${s}${s}${s}${s}${s}V${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}A${s}${s}${s}${s}C${s}${s}${s}O${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}M${s}${s}${s}${s}O${s}${s}${s}R${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}E${s}${s}${s}${s}S${s}${s}${s}ORDINAMENTO`,
    `${s}${s}${s}${s}${s}N${s}${s}${s}${s}T${s}${s}${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}`,
    `P${s}${s}${s}${s}T${s}AMBIENTE${s}R${s}${s}${s}${s}${s}${s}${s}${s}`,
    `ARTICOLO${s}${s}T${s}${s}${s}${s}CITTADINI${s}`,
    `R${s}R${s}${s}${s}${s}${s}${s}${s}U${s}${s}${s}${s}${s}T${s}${s}${s}I${s}${s}${s}${s}`,
    `T${s}I${s}${s}${s}${s}${s}${s}${s}Z${s}${s}${s}${s}${s}T${s}${s}${s}G${s}${s}${s}${s}`,
    `I${s}C${s}${s}${s}${s}${s}${s}${s}I${s}${s}${s}${s}${s}O${s}${s}${s}N${s}${s}${s}${s}`,
    `T${s}O${s}${s}${s}${s}${s}${s}${s}O${s}${s}${s}${s}${s}${s}${s}${s}${s}I${s}${s}${s}${s}`,
    `I${s}L${s}${s}${s}${s}${s}${s}${s}N${s}${s}${s}P${s}${s}${s}${s}${s}T${s}${s}${s}${s}`,
    `${s}${s}O${s}${s}${s}${s}${s}${s}SENATORI${s}${s}${s}À${s}${s}${s}${s}`,
    `${s}${s}R${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}L${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}DEMOCRAZIA${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}R${s}${s}${s}${s}${s}${s}${s}${s}${s}T${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}D${s}${s}${s}${s}${s}${s}${s}${s}BIODIVERSITÀ`,
    `${s}${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}${s}C${s}${s}${s}${s}${s}${s}U${s}${s}${s}`,
    `${s}${s}${s}${s}N${s}${s}${s}${s}${s}${s}${s}${s}${s}A${s}${s}${s}${s}${s}${s}F${s}${s}${s}`,
    `${s}${s}TRATTATI${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}F${s}${s}${s}`,
    `${s}${s}${s}${s}M${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}R${s}${s}${s}`,
    `${s}${s}${s}${s}E${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}REATI${s}`,
    `${s}${s}${s}${s}NAZIONE${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}G${s}${s}${s}`,
    `${s}${s}${s}${s}T${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}I${s}${s}${s}`,
    `${s}${s}${s}NORME${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}COMMA`,
    `${s}${s}${s}${s}G${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}U${s}${s}${s}`,
    `${s}${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}N${s}${s}${s}`,
    `${s}${s}${s}${s}U${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}I${s}${s}${s}`,
    `${s}${s}STRANIERO${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}V${s}${s}${s}`,
    `${s}${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}GUERRE${s}${s}${s}`,
    `${s}${s}${s}${s}D${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}R${s}${s}${s}`,
    `${s}${s}${s}${s}INTERNAZIONALE${s}${s}${s}S${s}${s}${s}`,
    `${s}${s}${s}${s}C${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}A${s}${s}${s}`,
    `${s}${s}${s}${s}O${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}L${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}E${s}${s}${s}`
]
//Altri cruciverba TODO
