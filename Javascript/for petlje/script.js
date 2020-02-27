// 1. zad, ispisati brojeve od 1 do 10 pomocu for petlje

let i;
/*
for(i = 1; i <= 10; i++){
    console.log(i);
}
*/
//2. zad, ispisati brojeve od 20 do 1
/*
for(i=20; i >= 1; i--){
    console.log(i);
}
*/
//3. zad, ispisati parne brojeve od 1 do 20
// 1. nacin
/*
for(i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
*/
/*
//2. nacin
for(i = 2; i <= 20; i+=2){
        console.log(i);
}
*/
//3. zadatak, ispisati dvostruku vrednost brojeva // i*2 ili kao i + i // od 5 do 15
/*
for( i = 5; i <= 15; i++){
    console.log(2*i); // console.log(i+i)
}
*/
// 5. Odrediti sumu brojeva od 1 do 100
/*
let s = 0;
for(i = 1; i <= 100; i++){
    s+=i;
}
console.log(s);
*/
//6. Odredite sumu brojeva od 1 do n
/*
let s = 0;
let n = 50;

for(i = 1; i <= n; i++){
    s+=i;
}
console.log(s);
*/

//7. Odredite sumu brojeva od n do m
/*
let s = 0;
let n = 50;
let m = 100;

for(i = n; i <= m; i++){
    s+=i;
}
console.log(s);
*/

/*
// Sabirati brojeve od 1 pa na dalje redom, tako da ne predjemo sumu s (<=)
let s = 15;
i = 1;
let br = 0;
let pom_s = 0;
while(pom_s <= s){
    pom_s += i;
    i++;
    br++;
}
console.log(br);
*/
// Pomnoziti brojeve od 1 pa na dalje redom, tako da ne predjemo uneti proizvod (<)
/*
i = 1;
let p = 15;
let pom_p = 1;
let br = 0;

while(pom_p <= p){
    pom_p *= i; // pom_p = pom_p * i;
    i++;
    br++;
}
console.log(br - 1);
*/
//12. zadatak, Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 (for petlja) // svaki zadatak moze preko 
/*
let p = 1;
for(i = 20; i <= 100; i++){
    if(i % 11 == 0){
        p = p * i; // p *= i;
    }
}
console.log(p);
*/
//12.1 zadatak, Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 i ispisati ih 
/*
let p = 1;
for(i = 20; i <= 100; i++){
    if(i % 11 == 0){
        p = p * i; // p *= i;
        console.log(i);
    }
}
console.log(p);
*/
//13 Prebrojati koliko ima takvih brojeva u intervalu od 5 do 150.
/*
let br = 0;

for(i = 5; i <= 150; i++){
    if(i % 13 == 0){
        br++;
    }
}
console.log(br);
*/
//Prebrojati koliko ima brojeva koji su deljivi sa 13 i koliko ima brojeva koji nisu deljivi sa 13
/*
let br = 0; // deljivi
let br1 = 0 // Nisu deljivi

for(i = 5; i <= 150; i++){
    if(i % 13 == 0){
        br++;
    } else{
        br++;
    }
}

console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13 i ${br1} brojeva koji to nisu`);
*/
// 2. nacin
/*
let br = 0; // deljivi
for(i = 5; i <= 150; i++){
    if(i % 13 == 0){
        br++;
}
let br1 = 150 - 5 - br + 1;
console.log(br1);
*/
// 14. zad, ispisati aritmeticku sredinu od n do m.
// 1. nacin
/*
let n = 5;
let m = 10;
let s = 0;
let br = 0;
for(i = n; i <= m; i++){
    s += i;
    br++;
}
let arsr = s / br;
console.log(arsr);

//2. nacin
let n = 5;
let m = 10;
let s = 0;
for(i = n; i <= m; i++){
    s += i;
}
br = m - n + 1;
let arsr = s / br;
console.log(arsr);
*/