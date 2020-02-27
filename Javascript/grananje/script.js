let a = 5;
let b = 8;
if(a > b)
{
    console.log(`${a} je vece od ${b}`);
}
console.log("Komanda posle if");

a = 6;
b = "6";
if(a == b){
    console.log(`${a} je jednako ${b}`)
}
if(a === b){
    console.log(`${a} je jednako ${b} po tipu i vrednosti`);
}
if(a != b){
    console.log(`${a} nije jednako ${b}`);
}
if(a !== b){
    console.log(`${a} nije jednako ${b} po tipu i vrednosti`);
}

a = 5;
b = 12;
if(a > b){
    console.log(`${a} je vece od ${b}`);
}
else{
    console.log(`${a} nije vece od ${b}`);
}

a = 6;
b = "6";
if(a == b){
    console.log(`${a} je jednako ${b}`)
}
else{
    console.log(`${a} nije jednako ${b}`);
}
if(a === b){
    console.log(`${a} je jednako ${b} po tipu i vrednosti`);
}
else{
    console.log(`${a} nije jednako ${b} po tipu i vrednosti`);
}
// Drugi zadatak
let temperatura = 20;
if(temperatura >= 0)
    console.log(`${temperatura } temperatura je u +`);
else{
    console.log(`${temperatura} je u -`);
}
// Treci zadatak
let pol = "m";
let div = document.getElementById('blabla')
if(pol == "m"){
    console.log("Pol je muski");
    div.innerHTML = "<img src='avatarmale.jpg' alt='Muski'>";
}
else{
    console.log("Pol je zenski");
    div.innerHTML = "<img src='avatarfemale.jpg' alt='Zenski'>";
}
// Cetvrti
let datum = new Date();
let sati = datum.getHours();
if (sati < 12){
    console.log("Jutro")
}
else{
    console.log("popodne")
}
// Peti zadatak
let trenGodina = datum.getFullYear();
let godiste = 2000;
if(trenutnaGodina - godiste >= 18){
    console.log("Osoba je punoletna")
}
else{
    console.log("Osoba je maloletna")
}
// Sesti zadatak

a = 18;
b = 12;
let c = 36;
if(a>b, a>c)
{
    console.log(`${a} je najveci`);
}
else if(b>a, b>c)
{
    console.log(`${b} je najveci`);
}
else if(c>a, c>a)
{
    console.log(`${c} je najveci`);
}

/* A moze da se uradi i ovako Sesti zadatak
a = 18;
b = 12;
c = 36;
let max = a;
if(b > max){
    max = b
}
if(c > max){
    max = c
}
console.log(max);
*/
