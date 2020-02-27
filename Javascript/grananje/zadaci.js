let a = 5;
let b = 9;
let c = a;
a = b;
b = c;
console.log(a, b);

// Zadatak br 7

let poeni = 75;

if (poeni >= 90){
    console.log("Ocena 10");
}
else if (poeni >= 80){
    console.log("Ocena 9");
}
else if (poeni >= 70){
    console.log("Ocena 8");
}
else if (poeni >= 60){
    console.log("Ocena 7");
}
else if (poeni >= 50){
    console.log("Ocena 6");
}
else{
    console.log("Ocena 5")
}

// Zadatak br. 8
let datum = new Date();
let dan = datum.getDay(); // 0-Sunday, 1-Monday, ..., 6-Saturday
if(dan == 0){
    console.log("Vikend");
}
else if(dan == 6){
    console.log("Vikend");
}
else{
    console.log("Radni dan")
}
// Zadatak br. 9
let vreme = datum.getHours();
if(vreme >= 18){
    console.log("Dobro vece");
}
else if(vreme >= 12){
    console.log("Dobar dan");
}
else{
    console.log("Dobro jutro");
}
// Zadatak br. 10
let dan1 = 7;
let mesec1 = 2;
let godina1 = 2020;
let dan2 = 5;
let mesec2 = 4;
let godina2 = 2020;
if(godina1 < godina2){
    console.log("Prvi datum se prvi desio");
}
else if(godina1 > godina2){
    console.log("Drugi datum se prvi desio");
}
else if(mesec1 < mesec2){
    console.log("Prvi datum se prvi desio");
}
else if(mesec1 > mesec2){
    console.log("Drugi datum se prvi desio");
}
else if(dan1 < dan2){
    console.log("Prvi datum se prvi desio");
}
else if(dan1 > dan2){
    console.log("Drugi datum se prvi desio");
}
else{
    console.log("Datumi su isti");
}
// Zadatak br. 11

// Zadatak br. 12
let p1 = 9;
let k1 = 17;
let p2 = 12;
let k2 = 21;
/*
if((p1 <= p2) && (p2 <= k1)){
    console.log("Preklapaju se");
}
else if((p2 <= p1) && (p1 <= k2)){
    console.log("Preklapaju se");
}
else{
    console.log("Ne preklapaju se");
}
*/
if((p1 <= p2 && p2 <= k1) || (p2 <= p1 && p1 <= k2))
{
    console.log("Smene se preklapaju");
}
else{
    console.log("Smene se ne preklapaju");
}
// Zadatak br. 13
let broj = 7;
let paran;
if(broj % 2 == 0){
    paran = true;
}
else{
    paran = false;
}
console.log(paran);


let boja = "plava";
switch(boja) {
    case "plava":
        console.log("Odabrali ste plavu boju");
        break;
    case "zelena":
    case "tirkizna":
        console.log("Odabrali ste nijansu zelene boje");
        break;
    case "crvena":
        console.log("Odabrali ste crvenu boju");
        break;
    default:
        console.log("Niste odabrali crvenu, plavu, zelenu boju");
}

// Zadatak 1

dan = datum.getDay();
console.log(dan);
switch(dan) {
    case 1:
        console.log("Dan je ponedeljak");
        break;
    case 2:
        console.log("Dan je utorak");
        break;
    case 3:
        console.log("Dan je sreda");
        break;
    case 4:
        console.log("Dan je cetvrtak");
        break;
    case 5:
        console.log("Dan je petak");
        break;
    case 6:
        console.log("Dan je subota");
        break;
    default:
        console.log("Dan je nedelja");
}

// Zadatak 2
Let ocenaa = 4;
switch(ocena) {
    case 1:
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlodobar");
        break;
    case 5:
        console.log("Odlican");
        break;
}
