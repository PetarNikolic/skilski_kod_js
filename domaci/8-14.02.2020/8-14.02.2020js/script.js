/* 1.Zadatak
Napisati funkciju suma koja vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli.
*/
function suma(n, m) {
	let s = 0;
	for(let i = n; i <= m; i++){
		s += i**3;
	}
	return s;
}

let zbir = suma(1, 5);
console.log(zbir);

/*
2.Zadatak
Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. 
Funkcija treba da vrati koliko godina ima neka osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i 
trenutne godine koju možete preuzeti sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.
*/



function godine(godRodjenja) {
	let datum = new Date();
	let godina = datum.getFullYear();

	let god = godina - godRodjenja;

	return god;

}

let g = godine(1995);
console.log(g);



/*
3.Zadatak
Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. 
Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. 
Pozvati funkciju.
*/

function deljiv(n, m, k) {
	let br = 0;
	for( i = n; i <= m; i++){
		if(i % k == 0){
		br++;
		}
	}
return `<p>${br}</p>`;
}
let div = document.getElementById('treci');
div.innerHTML = deljiv(1, 80, 4);
div.innerHTML += deljiv(1, 100, 4);



