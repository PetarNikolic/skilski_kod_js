let sportista ={
    imePrezime: "PetarNikolic",
    visina: 1.73,
    timovi: ["TimA", "TimB", "TimC"]
}
let sportista1 ={
    imePrezime: "DjordjeDjordjevic",
    visina: 1.83,
    timovi: ["TimG", "TimT", "TimE"]
}
let sportista2 ={
    imePrezime: "MarkoMarkovic",
    visina: 1.63,
    timovi: ["TimJ", "TimK", "TimL"]
}

let niz = [sportista, sportista1, sportista2];

// Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
// prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.

let prosecnaVisina = niz =>{
    let ukupno = 0;
        niz.forEach( k =>{
            ukupno += k;
        });
        let broj = niz.visina;
        let avg = ukupno / broj;
        return avg;
    }
console.log(prosecnaVisina(niz));

// Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
// prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
// sportisti igrali i vraća taj broj.




// Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija
// vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje
// puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli.

let najviseTransfera = najvise => {
    let max = najvise[0].timovi.length;
    let index = 0;
    niz.forEach((najvise, i) =>{
        if(sportista.timovi.length > max){
            max = sportista.timovi.length;
            index = i;
        }
    });
    console.log(najvise[index].imePrezime);
}

najviseTransfera(niz);

