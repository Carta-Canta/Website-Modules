# SearchTool
Questa versione è stata completamente adattata al sito e usa PHP per ottenere le pagine degli articoli (cosa che non è possibile con JS DOM)

## Uso
1) Creare una cartella (SearchTool) nella cartella [lib](https://github.com/Carta-Canta/Website/blob/2.0/lib) e copiare i file [getFiles.php](getFiles.php) e [searchEngine.js](searchEngine.js) in essa

2) Nel file [index.html](https://github.com/Carta-Canta/Website/blob/2.0/html/articoli/index.html) aggiungere lo script [searchEngine.js](searchEngine.js) 

3) Nel file [index.html](https://github.com/Carta-Canta/Website/blob/2.0/html/articoli/index.html) aggiungere un div contenitore con id articoli ed ad al div di ogni articolo di classe container is-fluid assegnare l'id in base al nome del file dell'articolo (Es pagina articolo: articolo1.html -> id:articolo1)
![example](only for Readme (do not use for website/1.png))
