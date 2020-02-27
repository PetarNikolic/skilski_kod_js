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

