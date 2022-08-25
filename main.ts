let messaggio = 'hello';
console.log(messaggio);

let x = 10;
const y = 25;
x = 15; //non metto let x, y non lo posso cambiare
//posso dichiarare variabile vuota ma non una costante
let a; a = 10; a = true;
let b = 20; //b = true; //da errore, b ha preso anche tipo di 20;

//TIPI DI VARIABILE
let nome: string = "Andrea";
let eta: number = 20;
let lie: boolean = true;
let n: null = null;
let u: undefined = undefined;
//mettendo . dopo variabile posso mettere funzioni

//ARRAY
let lista: number[] = [1,2,3,4];

let lista2: Array<number> = [1,2,3,4];
function creaArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}
const arr1 = creaArray<number>([1,2,3,4])

let lista3: [string, number] = ["io", 34];

//ENUM
enum Colori {Rosso = 10, Verde, Blu};
let r: Colori = Colori.Rosso;
console.log(r); //stampa 10

//ANY
//non so che tipo è
let random: any = true;
random = 45;
random = "ciao";

//UNION TYPE
let multitipo: number | string; //assegno due tipi di dati
multitipo = 30;
multitipo = "ciao";

//FUNZIONI
function add(num1: number, num2: number, num3:number = 45): number {
    return num1 + num2 + num3;
}
add(8, 10);

//INTERFACE
function nomeCompleto(persona: {nome: string, cognome: string}) {
    console.log(`lei si chiama ${persona.nome} ${persona.cognome}`)
}
let persona = {
    nome: 'billy',
    cognome: 'ballo'
}
nomeCompleto(persona);
//secondo metodo
interface Persona {
    nome: string,
    cognome: string
};
function nomeCompleto2(persona2: Persona ) {
    console.log(`lei si chiama ${persona2.nome} ${persona2.cognome}`)
}
let persona2 = {
    nome: 'billy',
    cognome: 'ballo'
}
nomeCompleto2(persona2);

//CLASSI
class Persone {
    nome: string
    cognome: string

    constructor(nome: string, cognome: string){
        this.nome = nome
        this.cognome = cognome
    }

    presente(){
        console.log(`ciao sono ${this.cognome}`)
    }

    saluta(persone: Persone){
        console.log(`ciao ${persone.cognome}`)
    }
}
let persona_classe: Persone = new Persone("luca", "rossi")
let persona_classe2: Persone = new Persone("marta", "rossi")
persona_classe.presente()
persona_classe2.saluta(persona_classe)

//DECORATIONS
//funzioni che applichiamo alle classi
function Logger(messaggio: string){
    return function(constructor: any){
        console.log(messaggio)
        console.log(constructor)
    }
}
@Logger("ciao sono il logger della classe prova")
class Decorazione {
    constructor(){
        console.log('sto facendo una prova')
    }
}

export {}