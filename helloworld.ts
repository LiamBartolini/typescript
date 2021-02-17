import { pseudoRandomBytes } from "crypto";

// Dichiaro una variabile message
let message: string = 'Hello World';
var mionumero: number = 7;
console.log(message);

var utente = {nome: "Mario", cognome: "Rossi"};
var ora = new Date().getTime();
document.onload = function () {
	var elemento = document.getElementById("myDiv");
	elemento.innerHTML = "Test!";
};

var x = 3;
// le funzioni hanno un tipo di ritorno e parametri tipizzati in ingresso!
function quadrato(n:number):number {
    return n*n;
}
var y = quadrato(x);

// Utilizzo consigliato per elenchi che rimangono immutabili
enum Frutta {Mela, Arancia, Pera, Banana};
var miaFrutta : Frutta = Frutta.Mela;

// Classe persona
// abstract class Persona {
class Persona implements IPersona{    
    // Campi
    nome: string;
    cognome: string;

    // Costruttore
    constructor(nome:string, cognome:string) {
        this.nome = nome;
        this.cognome = cognome;
    }

    // abstract assaliPreda() : void ;

    // Metodo
    // 'protected' -> visibile nel corpo della classe e alle classi figlie
    // private visualizzaNomeCognome() : string {
    //     return this.nome + ' ' + this.cognome;
    // }
    visualizzaNomeCognome() {
        return 'prova';
    }

    get nomeCompleto() : string {
        return this.nome + ' ' + this.cognome;
    }

    set nomeCompleto(valore:string) {
        var parti = valore.toString().split(' ');
        this.nome = parti[0] || ' ';
        this.cognome = parti[1] || ' ';
    }
}

enum Materie {Storia, Italiano, Inglese, Informatica};

// Ereditarietà
class Studente extends Persona {
    materie: Materie[];
    constructor(nome, cognome) {
        super(nome, cognome);
    }
}

// Interfaccia IPersona
// le classi che si iscrivono all'interfaccia devono implementare l'interfaccia
// E si impegna ad implementare tutti i metodi astratti presenti nell'interaccia
interface IPersona {
    nome: string;
    cognome: string;
    visualizzaNomeCognome() : string;
}

// con il '?' si indicano parametri opzionali, altrimenti sono obbligatori
function somma(x:number, y?:number) : number {
    return x + y;
}

// La funziona somma accetta due numeri o due array di numeri e ritorna un numero o un array di numeri
// function somma(x:number | number[], y:number | number[]):number|number[];