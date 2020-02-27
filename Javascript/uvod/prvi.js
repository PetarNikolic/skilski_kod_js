// window.alert("Hello world"); // poruka u alert box-u
// document.write("Hello world!"); // dodavanje sadrzaja

console.log("Hello world!"); // poruka u konzoli browsera

document.getElementById("par1").innerHTML = "Helllo world!";
console.log(55);
console.log(-3.232);

console.log("Pera");
console.log('Mika');
console.log("zika09zikic");
console.log('zika09zikic')

console.log(true);
console.log(false);

// komentar u jednoj liniji

/*
komentar u vise linija
*/

let x = 3; // promenljiva x, vrednost 3

console.log(x);

let y;

y = -9;
x= 5;

console.log(x, y);

const z = 8.04; // Kada se uvede konstanta, mora i njena vrednost da se zada, koja vise ne moze da se menja.

console.log(z);
// z = 5; // Ne moze jer je z konstanta
// console.log(z);

x = "Utorak";
console.log(x, y);


x = "Volvo XC60";
y = 'Volvo XC60';
console.log(x, y);

x = "It's alright";
y = 'He is called "Jhonny"';
console.log(x, y);

/*x = "It's alright, he is called 'Jhonny'";
console.log(x);

y = 'It"s alright, he is called "Jhonny"';
console.log(y);*/

x = 'It\'s alright, "Jhonny"';
y = "It's alright \"Jhonny\"";
console.log(x, y);

x = true;
y = false;
console.log(x, y);

let m;
console.log(m, m + 3);

let n = null;

console.log(n, n+3);


let firstName = 'Marko';
let lastName = 'Markovic';
let fullName = firstName + " " + lastName;

console.log(firstName, lastName, fullName);

// console.log(fullname); - nepostojeca promenljiva

console.log(fullName.length);

x = 8.7;
y = 3;
let t = x * y;
console.log(x, y, t);

x = 5;
y = 2;
t = x / y;
console.log(x, y, t);

x = 6;
y = 4;
console.log(x, y);
x = x + y;
console.log(x, y);

x = 8;
y = 4;
x *= y;
console.log(x, y);

x = 3;
y = 9;
x++; y--;
console.log(x, y);

x = 4;
y = 9;
console.log(y % x);

x = 3;
y = 9;
console.log(y**x);

// Prvi zadatak
let sati = 2;
let minuti = 45;
console.log(sati*60 + minuti)

// Drugi zadatak
let cena = 350;
let novcanica = 2000;
console.log(novcanica - cena)

// Treci zadatak
let kurs = 117.6;

let euri = 200;
kurs= 117.6;
console.log(euri * kurs)

let dinari = 2000;
kurs = 117.6;
console.log(dinari / kurs)

// Cetvrti zadatak
let kursdolar= 102;
let kurseuro= 117.6
euro= 500;
console.log(euro * kurseuro / kursdolar);
let dolar= 300;
console.log(dolar * kursdolar / kurseuro);

// Peti zadatak
let celzijus = 20;
let ferenhajt = celzijus * 1.8 + 32;
console.log(ferenhajt)

farenhajt = 140;
console.log((farenhajt - 32) /1.8)


// Sesti zadatak
celzijus = 20;
let kelvin = celzijus + 273.15;
console.log(kelvin)

kelvin = 150;
console.log(kelvin - 273.15)
