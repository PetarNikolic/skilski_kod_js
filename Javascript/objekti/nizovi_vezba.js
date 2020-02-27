// Nizovi
// Zad. 26.
let noviNiz = niz =>{
    let result = [];
    for(let i = 0; i < niz.length / 2; i++){
        console.log(i, i + niz.length /2);
        result.push
            ((niz[i] + niz[i + niz.length / 2]) /2);
        
    }
    console.log(result);
    return niz;
}

let a =[9, 4, 5, 8, 9, 1];
noviNiz(a);