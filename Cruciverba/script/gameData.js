//Dettagli cruciverba (Nome, numero caselle)
const cruciverba=[
    {"Nome":"A","x":5,"y":5},
    {"Nome":"B","x":4,"y":4},
    {"Nome":"Esempio","x":13,"y":11},
    {"Nome":"Semplice1","x":21,"y":19},
    {"Nome":"Semplice2","x":20,"y":14}
]
const definizioni=
[
    {
        "SEMPLICE1":{
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
        "SEMPLICE2":{
            "orizzontali":
            [
                {"text":"Attività con cui il potere giudiziario dà applicazione concreta alle norme"},
                {"text":"L'azione che un soggetto promuove contro altri avanti all'autorità giudiziaria"}
            ],
            "verticali":
            [
                {"text":"Annullamento di una norma giuridica"},
                {"text":"L'organica conoscenza del diritto; la scienza del diritto"},
                {"text":"Giudizio con effetti di decisione o di risoluzione espresso da chi ha competenza"}
            ]
        }
    }
]
var s="\u9824";
//IMPORTANTE! il nome della variabile deve essere righe+NOME
//Cruciverba A (riga1, riga2....)
var righeA=[`ABC${s}E`,`FGHIL`,`MNOPQ`,`RSTUV`,`XYKZA`];
//Cruciverba B (riga1, riga2....)
var righeB=[`${s}${s}C${s}`,`EFGH`,`${s}${s}M${s}`,`${s}${s}Q${s}`];
//Cruciverba Esempio
var righeESEMPIO=
[
    `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}D${s}`,
    `${s}${s}${s}DEMOCRAZIA`,
    `${s}${s}${s}O${s}${s}${s}${s}E${s}${s}R${s}`,
    `${s}LAVORO${s}P${s}${s}I${s}${s}`,
    `${s}${s}${s}E${s}${s}${s}${s}U${s}${s}T${s}`,
    `${s}${s}${s}R${s}${s}${s}${s}B${s}${s}T${s}`,
    `LIBERTÀ${s}B${s}${s}I${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}L${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}I${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}C${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}${s}A${s}${s}${s}${s}`
];
var righeSEMPLICE1=
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
var righeSEMPLICE2=
[
    `A${s}${s}${s}${s}${s}${s}G${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `B${s}${s}${s}${s}${s}${s}I${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `R${s}${s}${s}${s}${s}${s}U${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `O${s}${s}${s}${s}${s}${s}R${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `GIURISDIZIONE${s}${s}${s}S${s}${s}${s}`,
    `A${s}${s}${s}${s}${s}${s}S${s}${s}${s}${s}${s}${s}${s}${s}E${s}${s}${s}`,
    `R${s}${s}${s}${s}${s}${s}P${s}${s}${s}${s}${s}${s}${s}${s}N${s}${s}${s}`,
    `E${s}${s}${s}${s}${s}${s}R${s}${s}${s}${s}${s}${s}${s}${s}T${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}U${s}${s}${s}${s}${s}${s}${s}${s}E${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}D${s}${s}${s}${s}${s}${s}${s}${s}N${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}E${s}${s}${s}${s}${s}${s}${s}${s}Z${s}${s}${s}`,
    `${s}${s}${s}AZIONEGIUDIZIARIA`,
    `${s}${s}${s}${s}${s}${s}${s}Z${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
    `${s}${s}${s}${s}${s}${s}${s}A${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
]
//Altri cruciverba TODO
