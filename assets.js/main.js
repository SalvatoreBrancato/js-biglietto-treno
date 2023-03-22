    let km = prompt("Inserisci il numero di chilometri che vuoi percorrere");
    let età = prompt("Inserisci l' età del passeggero");
    let importoKm = "0.21";

    let sconto;
    if (età <18) {
        sconto = "20%";
    }
    else if (età >= 18 && età <= 60){
        sconto = "0%";
    }
    
    else if (età > 60){
        sconto = "40%";
    }
    
    let prezzo;
    if (età <18){
        prezzo = (km * importoKm * 0.8);
    }
    else if (età >=18 && età <=65){
        prezzo = (km * importoKm);
    }
    else if (età >65){
        prezzo = (km * importoKm * 0.6);
    }
    
    prezzo = prezzo.toFixed(2);

    console.log(prezzo);
    document.getElementById(`km`).innerHTML = `La distanza selezionata è di: ${km} km `;
    document.getElementById(`eta`).innerHTML = `L'età selezionata è di anni: ${età} `;
    document.getElementById(`prezzo`).innerHTML = `Il prezzo del biglietto è di €: ${km * importoKm} `;
    document.getElementById(`sconto`).innerHTML = `Sconto applicato: ${sconto} `; 
    document.getElementById(`totale`).innerHTML = `L'importo totale è di € ${prezzo} `;  

    