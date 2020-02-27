// Zadatak 11
function suma(n, m){
    if(n > m){
        return 0;
    }
    let s = 0;
   for(let i = n; i <= m; i++){
       s += i;
   }
   return s;
}
console.log(suma(7, 2));
 let p = suma(6, 12);
 console.log(p);
 p = suma(1, 9);
 console.log(p);
 console.log(suma(5, 18));

 // Zadatak 12
 function mnozi(n, m){
     let p = 1;
     for(let i = n; i <= m; i++){
         p *=i; // p = p * i;
     }
     return p;
 }

 console.log(mnozi(3, 6));

 // Zadatak 13
 function arsr(n, m){
     let zbir = 0;
     let broj = 0;
    for(let i = n; i <= m; i++){
        zbir = zbir + i; // zbir += i;
        broj = broj + 1; // broj++; ili broj += 1;
    }
    return zbir / broj;
 }

 console.log(arsr(5, 88));

 // Zadatak 14

 function arsr3(n, m){
     let zbir = 0;
     let broj = 0;
     for(let i = n; i <= m; i++){
         if(i % 10 == 3){
             zbir += i;
             broj++;
         }
     }
     if(broj > 0){
        return zbir / broj;
     }
     return 0;
     // k / 0 => Infinity
     // 0 / 0 => NaN
 }

 console.log(arsr3(1, 10));
 console.log(arsr3(6, 9));

 // Zadatak 10

 function deljivSaTri(n, m){
     let broj = 0;
     for(let i = n; i <= m; i++){
         if(i % 3 == 0){
            // console.log(i);
            broj++;
         }
     }
     return broj;
 }

 console.log(deljivSaTri(5, 14));

 // Zadatak 5

 function slika(putanja){
     return "<img src='" + putanja + "' alt = 'Blablabla'>";
     //drugi nacin: return `<img src='${putanja}' alt='Blablabla'>`;
 }

 let elem = document.getElementById('Blablabla');
 //console.log(elem.innerHTML);
 elem.innerHTML = slika('images/caj od nane.jpg');
 //console.log(elem.innerHTML);
 elem.innerHTML += slika('images/caj2.jpg');

 // Zadatak 6
 function paragraf(boja){
     return `<p style='color: ${boja}'> Tekst tekst...</p>`;
 }

 // iz predhodnog zadataka vucemo let elem
 elem.innerHTML += paragraf('red');
 elem.innerHTML += paragraf('blue');

 //6.1
 function paragraf2(boja, tekst){
     return `<p style='color: ${boja}'>${tekst}</p>`;
 }

 elem.innerHTML += paragraf2('green', 'Lorem ipsum...');
 elem.innerHTML += paragraf2('purple', 'Pera Peric');

 // Zadatak 7
 function paragraf3(velicina, tekst){
     return `<p style='font-size: ${velicina}px'>${tekst}</p>`;
 }

 elem.innerHTML += paragraf3(24, "Neki tekst");
 elem.innerHTML += paragraf3(46, "Neki drugi tekst");

 // Zadatak br 8
 function pisiPetParagrafa(){
     let res = "";
     for(let i = 1; i <= 5; i++){
         let j = i * 10;
         res = res + `<p style='font-size: ${j}px'>Neki tekst</p>`
     }
     return res;
 }

 elem.innerHTML += pisiPetParagrafa();