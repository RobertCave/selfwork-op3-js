// Selfwork Operatori 3
// Crea due variabili i cui valori verranno scelti dall’utente. Crea un programma che esegua i seguenti calcoli 
// su quei due numeri:

//     somma
//     sottrazione
//     moltiplicazione
//     divisione
//     potenza


let var1 = prompt("Inserisci il valore numerico della Variabile 1");
let var2 = prompt("Inserisci il valore numerico della Variabile 2");

// console.log(typeof var1);
// prompt passa al Js il tipo String e non è possibile effettuare operazioni matematiche 

// Conversione in numeri
var1=Number(var1);
var2=Number(var2);


let somma=var1+var2;
let sottrazione=var1-var2;
let moltiplicazione=var1*var2;
let divisione=var1/var2;
let potenza=Math.pow(var1,var2);


console.log("Ecco i risultati per i numeri: "+var1+" e "+var2);
console.log("La somma è: "+somma);
console.log("La sottrazione è: "+sottrazione);
console.log("La moltiplicazione è: "+moltiplicazione);
console.log("La divisione è: "+divisione);
console.log("La potenza è: "+potenza);



