// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// Chiedi all'utente il numero di chilometri e l'età
var chilometri = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
var eta = parseInt(prompt("Inserisci la tua età:"));

// Calcola il prezzo totale del viaggio
var prezzoTotale = chilometri * 0.21;

// Applica gli sconti
if (eta < 18) {
    // Sconto del 20% per i minorenni
    prezzoTotale *= 0.8;
} else if (eta >= 65) {
    // Sconto del 40% per gli over 65
    prezzoTotale *= 0.6;
}


prezzoTotale = prezzoTotale.toFixed(2);

// prezzo finale
console.log("Il prezzo del biglietto è di €" + prezzoTotale);

