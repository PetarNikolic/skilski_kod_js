let cars = ["Toyota", "BMW", "Opel"];
console.log(cars);
console.log(cars[0]);
console.log(cars[2]);

// Niz od n elemenata
// Indeksi su 0, 1, 2, ..., n - 1

cars[1] = "Ford";
console.log(cars);

let test = [6.07, "Sreda", -9, false];
console.log(test);

// Ispis svih elemenata niza
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}


// Ispis svih elemnata niza
for(let i = 0; i <= cars.length - 1; i++){
    //i = 0, 1, 2
    console.log(cars[i]);
}

// Ispis svih elemenata u obrnutom redosledu

for(let i = cars.length - 1; i >= 0; i--){ 
    // i = 2, 1, 0
    console.log(cars[i]);
}

// 2. Zadatak 
// Odrediti zbir elemenata celobrojnog niza

//let niz = [5, -9, 6, -4, -5, 5, 9, 9, 8, 0, -2];

let niz = [1, 2, 3, 4, 5];
let s = 0;
for(let i = 0; i < niz.length; i++){
    s = s + niz[i];
}
console.log(s);

// Zad 3 Odrediti proizvod elemenata celobrojnog niza

let proizvod = 1;
for(let i = 0; i < niz.length; i++){
    proizvod = proizvod * niz[i];
}
console.log(proizvod);

// Zad 4 Odrediti srednju vrednost elemenata celobrojnog niza.
s = 0;
for(let i = 0; i < niz.length; i++){
    s = s + niz[i];
}
let srvr;
if(niz.length == 0){
    srvr = 0;
}
else{
    srvr = s / niz.length;
}
console.log(srvr);

// Zad 5 Odrediti maksimalnu vrednost u celobrojnom nizu

niz = [5, -9, 6, -4, -5, 5, 9, 9, 8, 0, -2];
let max = niz[0]; // GRESKA: max = 0 !
for(let i = 1; i < niz.length; i++){
    if(niz[i] > max){
        max = niz[i];
    }
}
console.log(max);

// Zad 6 Odrediti minimalnu vrednost u celobrojnom nizu.

let min = niz[0];
for(let i = 1; i < niz.length; i++){
    if(niz[i] < min){
        min = niz[i];
    }
}

console.log(min);


// Zad 6.1 Napisati arrow funkciju koja vraca minimalni element niza

let minArrow = niz => {
    let min = niz[0];
    for(let i = 1; i <= niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

console.log(minArrow(niz));
console.log(minArrow([1, 9, -6, -4, -24, -4, 9]));

// Zad 7 Odrediti indeks maksimalnog elementa celobrojnog niza

let maxIndex = niz => {
    let max = niz[0]; // Tu pamtimo vrednost maksimalnog elementa niza
    let index = 0; // Index maksimalnog elementa niza
    for(let i = 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(maxIndex(niz));
console.log(maxIndex([2, 5, 11, 65, 4, 3, -7, 8, -63, 5]))

// Zad 8 Odrediti indeks najmanjeg elementa celobrojnog niza.

// Za domaci zad 8

// Zad 9 Napisati arrow funkciju koja vraca broj elemenata celobrojnog niza koji su
//veći od srednje vrednosti.
let arSr = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i]
    }
    return suma / niz.length;
}

let brojsrvr = niz => {
    let srvr = arSr(niz);
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] > srvr){
            broj++;
        }
    }
    return broj;
}
console.log(brojsrvr(niz));

// Zad 10 Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPoz = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] > 0){
            suma += niz[i];
        }
    }
    return suma;
}

console.log(zbirPoz(niz));

// 11 zad, Odrediti broj parnih elemenata u celobrojnom nizu.

let brPar = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            broj++;
        }
    }
    return broj;
}

console.log(brPar(niz));

// 12 zad, Odrediti broj parnih elemenata sa neparnim indeksom.

let brParNepInd = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0 && i % 2 != 0){
            broj++;
        }
    }
    return broj;
}

console.log(brParNepInd(niz));

// 13 zad, Izračunati sumu elemenata niza sa parnim indeksom.
// Za domaci 13. zadatak


// 14 zad, Promeniti znak svakom elementu celobrojnog niza.
let promeniZnak = niz =>{
    for(let i = 0; i < niz.length; i++){
        niz[i] *= -1;
    }
}
promeniZnak(niz);
console.log(niz);

// 15. zad, Promeniti znak svakom neparnom elementu celobrojnog
// niza sa parnim indeksom.
// ZA DOMACI

// 16. zad, Dat je niz stavki za kupovinu (članovi niza su stringovi).
//Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
//html dokument.

let lista = niz => {
    // Elementi niza su stringovi
    let result = "";
    result += "<ul>";
    for(let i = 0; i < niz.length; i++){
        result += `<li>${niz[i]}</li>`;
    }
    result += "</ul>"
    return result;
}
let div = document.getElementById('blabla');
div.innerHTML = lista(['Jaja', 'Mleko', 'Jogurt']);


// Zadatak 17, Dat je niz imena košarkaškog tima. Prolaskom kroz niz
// formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
/*
<table>
    <tr><td>Tim A </td></tr>
    <tr><td>Tim B</td></tr>
    <tr><td>Tim C</td></tr>
</table> */

let nizTimova = ['Tim A', 'Tim BB', 'Tim CCC'];
let tabela = "<table>";
for(let i = 0; i < nizTimova.length; i++){
    tabela += `<tr><td> ${nizTimova[i]} </td></tr>`
}
tabela += "</table>";
let divTabela = document.getElementById('tabela');
divTabela.innerHTML = tabela;


// U tabeli u istom redu
/*
<table>
    <tr>
    <td>Tim A </td>
    <td>Tim B</td>
    <td>Tim C</td>
    </tr>
</table> */

tabela = "<table><tr>";
for(let i = 0; i < nizTimova.length; i++){
    tabela += `<td> ${nizTimova[i]} </td>`
}
tabela += "</tr></table>";
divTabela = document.getElementById('tabela2');
divTabela.innerHTML = tabela;

// Zad 18. Dat je niz stringova čiji su članovi putanje do slika.
// Prikazati sve sliku u html dokumentu sa putanjama
// navedenim u nizu.

let nizSlika = ['images/pizza.jpg', 'images/pasta.jpg', 'images/oliveoil.jpg'];
let slike = "";// stavljamo prazan strig zato sto nemamo tag koji nam otvara slike
for(let i = 0; i < nizSlika.length; i++){
    slike += `<img src=${nizSlika[i]}><br>`;
}

div = document.getElementById('slike');
div.innerHTML = slike;


// Stringovi i njihovi metodi
let str = `Zdravo svete!`;

// Duzina stringa - length
console.log(str.length);

// Da li sadrzi neki karakter - includes
console.log(str.includes('v'));

if(str.includes('o')){
    console.log("String sadzi slovo o");
} else {
    console.log("String ne sadrzi slovo o")
}

// Da li sadrzi karater na specificiranoj poziciji
console.log(str.includes('Z', 0));

// Prvi indeks unetog slova - indexOf
console.log(str.indexOf('e'));

// Poslednji indeks unetog slova - lastIndexOf
console.log(str.lastIndexOf('e'));

// Prvo slovo reci - startsWith
console.log(str.startsWith('Z'));

// Poslednje slovo reci - endsWith
console.log(str.endsWith('?'));

// metoda  slice - Odakle poceti (od koje pozicije) podstring, gde zavrsiti podstring
// let str = `Zdravo svete!`;
console.log(str.slice(3, 4));

// substring - odakle poceti (od koje pozicije) podstring, kolioko elemenata od te pozicije na dalje uzeti
console.log(str.substr(3, 5));

// replace
console.log(str.replace('e', 'w'));

// Zad 19. Ispisati dužinu svakog elementa u nizu stringova.
for(let i = 0; i < nizTimova.length; i++){
    let duzReci = nizTimova[i].length;
    console.log(duzReci);
    //drugi nacin // console.log(nizTimova[i].length);
}

// 20. Odrediti element u nizu stringova sa najvecom duzinom.
// let nizTimova = ['Tim A', 'Tim BB', 'Tim CCC'];
let najduzaRec = nizTimova =>{
    let maks = nizTimova[0].length;
    let maksRec = nizTimova[0];
    for(let i = 1; i < nizTimova.length; i++){
        if(maks < nizTimova[i].length){
            maks = nizTimova[i].length;
            maksRec = nizTimova[i];
        }
    }
    return maksRec;
}
console.log(najduzaRec(nizTimova));

// 19.1 Prosecan broj slova u nizu reci
// let nizTimova = ['Tim A', 'Tim BB', 'Tim CCC'];
    let prosekSlova = nizTimova =>{
    let s = 0;
    for(let i = 0; i < nizTimova.length; i++){
        s += nizTimova[i].length;
    }
    let arsr = s / nizTimova.length
    return arsr;
}
console.log(prosekSlova(nizTimova));

// Ispisati nadprosecno dugacke reci
let natprosecnoDugacke = niz => {
    let ar = prosekSlova(niz);
    for(let i = 0; i < niz.length; i++){
        if(ar < niz[i].length){
        console.log(niz[i]);
        }
    }
}
natprosecnoDugacke(nizTimova);


// 21. Odrediti broj elemenata u nizu stringova cija je duzina
// veca od prosecne duzine svih stringova u nizu.

let brojNatprosecnoDugih = niz => {
    let ar = prosekSlova(niz);
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(ar < niz[i].length){
        br++;
        }
    }
    return br;
}
console.log(brojNatprosecnoDugih(nizTimova));

// 22. Odrediti broj elemenata u nizu stringova koji pocinju na slovo 'a' ili 'A'.

let brojElemenataSaKarakterom = (niz, slovo) =>{
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i].includes(slovo)){
            br++;
        }
    }
    return br;
}
console.log(brojElemenataSaKarakterom(nizTimova, 'i'));


// 23. Odredite broj elemenata u nizu stringova koji pocinju na slovo 'a' ili 'A'.

let brojElemenataKojiPocinjuSlovom = (niz, slovo) =>{
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        // slovo.toUpperCase() - za pretvaranje slova u veliko slovo
        // slovo.toLowerCase() - za pretvaranje slova u malo slovo
        if(niz[i].startsWith(slovo.toLowerCase()) || niz[i].startsWith(slovo.toUpperCase())){
            br++;
        }
    }
    return br;
}
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'y'))
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 't'))
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'T'))


// 24. Dati su nizovi
let a = [2, 5, 7];
let b = [-7, -5, -9];
let c = [];
for(let i = 0; i < a.length; i++){
    c.push(a[i]);
    c.push(b[i]);
}
console.log(c);

// Izbacivanje poslednjeg elementa iz niza pop()
console.log(c.pop());
c.pop();
console.log(c);

// 25.

let proizvodElemenata = (a, b) =>{
    let c = [];
    for(let i = 0; i < b.length; i++){
    c.push(a[i] * b[i]);
    }
    return c;
}
console.log(proizvodElemenata(a, b));

// 26.

a = [2, 4, 6, 12, 10, 14];
//   0  1  2  3   4   5
b = [];
let n = a.length / 2;
for(let i = 0; i < n; i++){
    let i_pom = a.length - i - 1;
    b.push((a[i] + a[i_pom]) / 2);
}
console.log(b);