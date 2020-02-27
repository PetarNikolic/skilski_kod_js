// 1. For petljom uraditi sledeće zadatke: 
// a. Odrediti proizvod brojeva od n do m.

let p = 1;
let n = 3;
let m = 12;

for(let i = n; i <= m; i++){
	p *= i;
}
console.log(p);

// b. Odrediti sumu kvadrata brojeva od n do m.
let s1 = 0;
let n1 = 2;
let m1 = 5;

for(i = n1; i <= m1; i++){
	s1 += i**2;
}
console.log(s1);



// 2. While petljom uraditi sledeći zadatak: Sabrati sve brojeve deljive sa 9 u intervalu od 1 do 30.

let k = 9;
let i1 = 1;
let s = 0;
let vr2 = 30;

while(i1 <= vr2){
	if(i1%k == 0){
		s = s + i1;
	}
	i1++;
}
console.log(s);

// Izvinjavam se zbog kasnjenja ali kao sto rekoh nisam bio u stanju da odradim na vreme domaci zadatak zbog prehlade. Vidimo se sutra.