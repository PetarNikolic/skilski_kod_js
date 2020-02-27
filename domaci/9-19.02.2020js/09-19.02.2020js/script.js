// 1. Napisati arrow funkciju koja za celobrojni niz vraća indeks minimalnog elementa.
let niz = [1, 3, 5, -2, 7, 11];
let indeks = 0;
let minArrow = niz => {
    let min = niz[0];
    for(let i = 1; i <= niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
            indeks = i;
        }
    }
    return indeks;
}

console.log(minArrow(niz));

// 2. Napisati arrow funkciju koja za celobrojni niz vraća 
// sumu elemenata niza sa parnim indeksom.

let s = 0;
let suma = niz => {
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 0 ){
            s += niz[i];
        }
    }
    return s;
}

console.log(suma(niz));



// 3. Napisati arrow funkciju koja menja znak svakom neparnom elementu 
// celobrojnog niza sa parnim indeksom.

let niz2 = [1, 2, 3, 4, -4, -9, 10, 7, -5];
let znakNeParInd = niz2 =>{
    for(let i = 0; i < niz2.length; i += 2){
        if(niz2[i] % 2 != 0){
            niz2[i] *= -1;
        }
    }
    return niz2;
}

console.log(znakNeParInd(niz2));

// Pozvati sve funkcije i rezultate poziva prikazati u konzoli.
