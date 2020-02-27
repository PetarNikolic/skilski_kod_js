// Zadatak 1. ispisati brojeve od 1 do 20 svaki u novom redu
/*
console.log("Zdravo");

let i = 1;
while(i <= 20 ){
    console.log(i);
    i++; // ili  i+=1; i = i + 1
}

console.log("svete!");

// Zadatak 2. ispisati brojeve od 1 do 20 sve u istom redu

let i = 1;
let rez = "";
while(i <= 20 )
{
    rez = rez + i + " "; // rez += i + " ";
    i++; // ili  i+=1; i = i + 1
}
console.log(rez);

// Zadatak 3. Ispisati brojeve od 20 do 1

let j = 20;
while(j >= 1)
{
    console.log(j);
    j--; // ili j-=1; ili j=j-1
}

// Zadatak 4. ispisati parne brojeve od 20 do 1
let j = 20;
while(j >= 2)
{
    console.log(j);
    j-=2; // ili j=j-2;
}

//4.1 ispisati brojeve od 1 do 20 koji su deljivi sa 3 ali nisu sa 9
let i = 1;
while(i <= 20)
{
    if(i% 3 == 0 && i% 9 != 0)
    {
        console.log(i);
    }
    i++;
}
*/
/*
//Zadatak br. 6 Odrediti sumu brojeva od 1 do 100
let i = 1;
let s = 0; // Neutral za sabiranje; // Pocetna vrednost
while(i <= 100)
{
    s += i; // s = s + i;
    i++; //i = i + 1; // i+=1;
}
console.log(s);
*/
/*
s= 0; i = 1;
s = 1; i = 2;
s = 3; i = 3;
s = 6; i = 4;
s = 10; i = 5;


//Zadatak 6.1 suma parnih brojeva od 1 do 100

let s = 0;
let i = 2;
while(i <= 100){
    if(i%2 == 0){
        s += i; //s = s + i;
    }
    i++; // i+=1; //i=i+1// Ide izvan ifa da bi se povecavao svaki put
}
console.log(s);


// Odrediti sumu brojeva od 1 do n

let i = 1;
let n = 10;
let s = 0;
while(i <= n){
        s += i; //s = s + i;
        i += 1;
}
console.log(s);
// Suma brojeva od 1 do n
console.log(n*(n + 1)/2);


// Zadatak 8, odrediti sumu brojeva on n do m
let n = 5;
let m = 10;
let s = 0;
let i = n;
while(i <= m){
    s += i; // s= s + n;
    i++; // n = n + 1;
}

let c = "!!!!!"
console.log("Suma brojeva od " + n + " do " + m + "je" + s);
console.log(`Suma brojeva od ${n} do ${m} je ${s} ${c}`);

// Zadatak br 9 Odredi proizvod brojeva od n do m
let n = 1;
let m = 5;
let i = n;
let p = 1; // neutral za mnozenje je 1

while(i<=m){
    p *= i; // p = p * i;
    i++; //i+=1: //ili i=i+1;
}
console.log(p);

// Zadatak 9.1 odrediti proizvod svakog drugog broja od n do m

let n = 1;
let m = 5;
let i = n;
let p = 1; // neutral za mnozenje je 1

while(i<=m){
    p *= i; // p = p * i;
    i=i+2; //i+=2;
}
console.log(p);
*/
/*
// Zadatak br. 10, Odrediti sumu kvadrata brojeva od n do m
let n = 1;
let m = 5;
let i = n;
let s = 0;

while(i <= m){
    s = s + i**2; // s = s + i*i; // s += i*i; // s+= i**2
    i++;
}
console.log(s);
*/
/*
    s = 0; i = 1;
    s = 1; i = 2;
    s = 5; i = 3;
    s = 14; i = 4;
    s = 30; i = 5;
    s = 55; i = 6;
*/

// Zadatak br 11 odrediti sa koliko brojeva je deljiv uneti br k
let k = 15;
let i = 1;
let br = 0;

while(i <= k){
    if(k % i == 0){
        br++; // br+=1; // br=br+1;
    }
    i++; // i += 1; // i = i + 1;
}
console.log(br);
/*
    15 / 1 = true
    15 / 2 = false
    15 / 3 = true
    15 / 4 = false
    15 / 5 = true
    15 / 15 = true
*/
