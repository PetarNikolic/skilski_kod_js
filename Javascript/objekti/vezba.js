// 3. zad za domaci

let znakNeParInd = niz =>{
    let suma =0;
    for(let i; i < niz.length; i+=2){
        if(niz[i] % 2 != 0){
            niz[i] *= -1;
        }
    }
}

let znakParElNeparInd = niz =>{
    for(let i = 1; i < niz.length; i += 2){
        if(niz[i] % 2 == 0){
            niz[i] *= -1;
        }
    }
}

// objekti, funkcije, petlje
// pozadinska boja, boja teksta, velicina teksta
// stingovi i nizovi