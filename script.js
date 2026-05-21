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
const arrowFunction = (numero1, numero2) => {
    return numero1 + numero2 ;
};

// TEST 

console.log(somma(5,5));
console.log(sommaAnonima(4,7));
console.log(arrowFunction(10,3));

