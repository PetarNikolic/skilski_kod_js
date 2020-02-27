// Dohvatamo trenutno vreme
// 1) Kreiramo objekat Date

let datum = new Date();

let sati = datum.getHours(); // Trenutno sati
let minuti = datum.getMinutes(); // Trenutno minuta
console.log(sati, minuti);

let minutaOdPonoci = sati * 60 + minuti; // koliko je proslo minuta od ponoci
console.log(minutaOdPonoci)

let a = 3;
let b = 5;
console.log(a + b);

a = "3"; //Kada stavimo navodnike, na te brojeve gleda kao na stringove i onda se desava konkatenacija stringova
b = "5";
console.log(a + b);

a = 3; // Kada sabiramo broj i string js automatski prebacuje broj u string
b = "5";
console.log(a + b);

let c;
a = "5"; // Dobili smo string od 3 karaktera 5 3 i 9
b = 3;
c = 9;
console.log(a + b + c);
console.log(b + c + a) //Sabrao brojeve pa njih napravio na string

console.log("prvi broj je:" + b + ", a drugi je:" + c);

// Template string - `` (backticks)
// Obicni stringovi - '' ili ""
console.log(`Prvi broj je: ${b}, a drugi je: ${c}`);
console.log(5 / "hello");