/*🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/

// 1. Funzione Dichiarativa
function somma (numero1, numero2){
    return numero1 + numero2 ;
};

// 2. Funzione Anonima assegnata a una variabile
const sommaAnonima = function(numero1,  numero2){
    return numero1 + numero2 ;
};

// 3. Arrow Function (Sintassi contratta)
const arrowFunction = (numero1, numero2) => numero1 + numero2;
// TEST 

console.log(somma(5,5));
console.log(sommaAnonima(4,7));
console.log(arrowFunction(10,3));


/*🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const quadrato = (numero) => {
    return numero * numero ;
}

console.log(quadrato(5));

/*🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
La funzione deve eseguire l'operazione fornita sui due numeri.
*/

function eseguiOperazione (a, b){


};


/*Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione 
che avvia un setTimeout per stampare "Tempo scaduto!".*/

function creaTimer (ms){
    return function (){ 
        setTimeout(function(){
            console.log("tempo scaduto!")
        },ms);
        
    };
};
const avviaCreaTimer= creaTimer(3000);

console.log("timer avviato a " , avviaCreaTimer());
 
/*🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

 
function stampaOgniSecondo(messaggio){
    setInterval(function(){
            console.log(messaggio)
        },1000)
    };
     stampaOgniSecondo("scrivimi ogni secondo");


     /*🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, 
incrementando un contatore e stampandolo.*/


function creaContatoreAutomatico (intervallo){
    let contatore = 0 ;

     return function(){
        setInterval(function(){
            contatore ++ ;
            console.log("contatore ", contatore);
        },intervallo)
     };
};
  
const avviaContatore = (creaContatoreAutomatico(3000));

avviaContatore(); //per avviare il contatoree 

/*🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/

function eseguiEferma(messaggio, timerAvvia, timerOut){

    const idTimerAvvia = setInterval(function(){console.log(messaggio)},timerAvvia);

    const idTimerOut = setTimeout(function(){clearInterval(idTimerAvvia); //clearInterval per interrompere il setinterval e lo interompe 
        console.log("timer finito basta parlare  ");
    },timerOut);
      
};

console.log(eseguiEferma("sto parlando", 1000, 3000 ));

/*Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero.
 Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.*/


function contoAllaRovescia(n){

    let count = n ;
     const idCount = setInterval(function(){
        if (count > 0 ){
            console.log(count);
            count -- ;
        }
        else (console.log("Tempo scaduto!"));
        clearInterval(idCount);
    
    },1000);
};
contoAllaRovescia(5);