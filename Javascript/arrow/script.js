let suma = function(a, b){
    let s = a + b;
    return s;
}

console.log(suma(1, 4));
console.log(suma(9, 4));

// arrow funkcija
let suma2 = (a, b) => {
    return a + b;
}
console.log(suma2(6, 9));

// primer 1
let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

// primer 2
let echo = (s1, s2) => {
    let s = s1 + ", " + s2;
    console.log(s);
}
echo("Pera", "Peric");
echo("Laza", "Lazic");

// 3. zadatak iz spiska zadataka funkcije
// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.\

let neparan = (n) => {
    if(n % 2 == 0){
    return false
    }
    else{
        return true
    }
}
console.log(neparan(12))


//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
//napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (a, b) => {
    if (a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(maks2(12, 43))

let maks4 = (a, b, c, d) => {
    let max1 = maks2(a, b);
    let max2 = maks2(c, d);
    let max3 = maks2(max1, max2);
    return max3;
}
console.log(maks4( 2, 11, 32, 34));

// 5. Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.
// obicna funkcija
function slika(putanja){
    return `<image src='${putanja}' alt='Blabla'>`;
}

// arrow funkcija
let sklika2 = (putanja) => {
    return `<image src='${putanja}' alt='Blabla'>`;
}

// 1) Telo arrow funkcije se sastoji samo od return naredbe
let slika3 = (putanja) => `<image src='${putanja}' alt='Blabla'>`;

let div = document.getElementById('blabla');
div.innerHTML = slika3('images/pasta.jpg');

// 2) Arrow funkcija prima JEDAN parametar
let slika4 = putanja => `<image src='${putanja}' alt='Blabla'>`;

div = document.getElementById('blabla');
div.innerHTML = slika3('images/pasta.jpg');
div.innerHTML = slika4('images/pizza.jpg');

let sledbenik = n => n + 1;
console.log(sledbenik(5));





//10. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi
// sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

let brojBrojeva = 0;
let deljivSaTri = (n, m) => {
    for (let i = n; i <= m; i++){
        if (i % 3 == 0){
            console.log(i);
            brojBrojeva++;
        }
    }
    return brojBrojeva;
}
deljivSaTri(1, 10);