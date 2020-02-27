/*Napraviti objekat dan koji sadrži atribute:
Datum
Kiša (true/false)
Sunce (true/false)
Oblačno (true/false)
Vrednosti temperature (niz izmerenih temperatura tog dana)

Napomena: Iako su neki od gore navedenih atributa “nepotrebni” u narednim zadacima, 
ipak napraviti ove atribute, kako bi u ponedeljak moglo da se vežba nad njima. :) 

*/

let dan = {
    datum: "22.02.2020",
    kisa: true,
    Sunce: false,
    Oblacno: true,
    vrednostiTemp: [13, 11, 16, 24],
    // 1. Napraviti metod prosecnaTemperatura koji računa i vraća prosečnu temperaturu za niz tempetarura (koji je dat u objektu)
    prosecnaTemperatura: function(){
        let ukupno = 0;
        this.vrednostiTemp.forEach( k =>{
            ukupno += k;
        });
        let broj = this.vrednostiTemp.length;
        let avg = ukupno / broj;
        return avg;
    }
};
console.log(dan.prosecnaTemperatura());

//2. Napraviti niz dana dani koji sadrži nekoliko dan objekata
let dan1 = {
    datum: "22.02.2020",
    kisa: false,
    Sunce: true,
    Oblacno: false,
    vrednostiTemp: [20, 21, 16, 24],
};

let dan2 = {
    datum: "04.03.2020",
    kisa: true,
    Sunce: false,
    Oblacno: true,
    vrednostiTemp: [12, 14, 16, 19],
};

let dan3 = {
    datum: "21.02.2020",
    kisa: false,
    Sunce: false,
    Oblacno: true,
    vrednostiTemp: [20, 21, 23, 25],
};
let dani = [dan1, dan2, dan3];

// 3. Napraviti arrow funkciju maksTemperatura kojoj se prosleđuje niz dana 
// a ona vraća maksimalnu temperaturu koja je izmerena u tim danima.
let maksTemperatura = dani => {
    let maks = dani[0].vrednostiTemp[0];
    dani.forEach(a => {
        let nizDana = a.vrednostiTemp;
        nizDana.forEach(b => {
                if(b > maks){
                    maks = b;
                }
        });
    });
    return maks;
}
console.log(maksTemperatura(dani));