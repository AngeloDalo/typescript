"use strict";
exports.__esModule = true;
var messaggio = 'hello';
console.log(messaggio);
var x = 10;
var y = 25;
x = 15; //non metto let x, y non lo posso cambiare
//posso dichiarare variabile vuota ma non una costante
var a;
a = 10;
a = true;
var b = 20; //b = true; //da errore, b ha preso anche tipo di 20;
//TIPI DI VARIABILE
var nome = "Andrea";
var eta = 20;
var lie = true;
var n = null;
var u = undefined;
//mettendo . dopo variabile posso mettere funzioni
//ARRAY
var lista = [1, 2, 3, 4];
var lista2 = [1, 2, 3, 4];
var lista3 = ["io", 34];
//ENUM
var Colori;
(function (Colori) {
    Colori[Colori["Rosso"] = 10] = "Rosso";
    Colori[Colori["Verde"] = 11] = "Verde";
    Colori[Colori["Blu"] = 12] = "Blu";
})(Colori || (Colori = {}));
;
var r = Colori.Rosso;
console.log(r); //stampa 10
//ANY
//non so che tipo è
var random = true;
random = 45;
random = "ciao";
//UNION TYPE
var multitipo; //assegno due tipi di dati
multitipo = 30;
multitipo = "ciao";
//FUNZIONI
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 45; }
    return num1 + num2 + num3;
}
add(8, 10);
//INTERFACE
function nomeCompleto(persona) {
    console.log("lei si chiama ".concat(persona.nome, " ").concat(persona.cognome));
}
var persona = {
    nome: 'billy',
    cognome: 'ballo'
};
nomeCompleto(persona);
;
function nomeCompleto2(persona2) {
    console.log("lei si chiama ".concat(persona2.nome, " ").concat(persona2.cognome));
}
var persona2 = {
    nome: 'billy',
    cognome: 'ballo'
};
nomeCompleto2(persona2);
