const tabellone = document.getElementById("tabellone");
const numeriUsciti= new Set(); // Set è un array che non accetta duplicati	


for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.innerText = i;
    cella.id = "num-" + i;
    tabellone.appendChild(cella);
}


const estraiNumero = function () {
    let numero;
    do {
        numero = Math.floor(Math.random() * 76)+1;
    } while (numeriUsciti.has(numero));

    numeriUsciti.add(numero);
    
    document.getElementById("num-" + numero).classList.add("numero-Estratto");
}