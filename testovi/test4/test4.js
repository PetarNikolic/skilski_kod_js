// Zadatak broj 1
let n = 10;
let m = 200;
let s = 0;
let brojB = 0;


for(let i = n; i <= m; i++){
    if((i % 7 == 0) && (i % 2 != 0)){
        s += i;
        brojB += i;
    }
}

console.log(s);
console.log(brojB);
console.log(s * brojB);


// Zadatak 2

function indeksTelesneMase(tezina, visina){
  let bmi = tezina / (visina / 100)**2
    return bmi
}

let bmi = indeksTelesneMase(65, 170);
console.log(bmi);

if(bmi > 30){
    console.log("Gojaznost")
}
else if(bmi >= 24,9){
    console.log("Povisena tezina")
}
else if(bmi <= 24,9){
    console.log("Normalna tezina")
}
else if(bmi <= 18,5){
    console.log("Pothranjenost")
}