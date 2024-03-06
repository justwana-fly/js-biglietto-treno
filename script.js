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

