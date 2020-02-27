// 1. Za dva uneta broja ispisati koji je veći a koji je manji.

let n = 13;
let m = 654;

if(n > m){
	console.log(`${n} je veće od ${m}`)
}
else{
	console.log(`${m} je veće od ${n}`)
}

// 2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

let temperatura = 120;

if(temperatura >= 0){
	console.log("Temperatura je u plusu")
}
else{
	console.log("Temperatura je u minusu")
}

// 3. U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.

let pol = "m";

if(pol == "m"){
	console.log("Pol je muski");
	avatari.innerHTML = "<img src='images/male.png' alt='Muski'>";
}
else{
	console.log("Pol je zenski");
	avatari.innerHTML = "<img src='images/female.png' alt='Zenski'>";
}

// 4. U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

let vreme = new Date();
let sati = vreme.getHours();

if(sati >= 12){
	console.log("Popodne")
}
else{
	console.log("Jutro")
}

// 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let godRodj = 1996;
let godina = vreme.getFullYear();
let godine = godina - godRodj;

if(godine >= 18){
	console.log("Osoba je punoletna")
}
else{
	console.log("Osoba je maloletna")
}

// 6. Odrediti najveći od tri uneta broja.

let a = 654;
let b = 655;
let c = 342;
let max = a; 

if(b > max) {
    max = b;
}
if(c > max) {
    max = c;
}
console.log(max);

/* 7. 
Na osnovu unetog broja poena ispitati koju
ocenu profesor treba da upiše učeniku. Učenik
je položio ispit ukoliko ima više od 50 poena, u
suprotnom je pao ispit.
Za više od 50 poena učenik dobija ocenu 6,
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8,
za više od 80 poena učenik dobija ocenu 9 i
za više od 90 poena učenik dobija ocenu 10.*/

let poeni = 63;

if(poeni >= 90){
	console.log("Ocena 10");
}
else if(poeni >= 80){
	console.log("Ocena 9");
}
else if(poeni >= 70){
	console.log("Ocena 8");
}
else if(poeni >= 60){
	console.log("Ocena 7");
}
else if(poeni >= 50){
	console.log("Ocena 6");
}
else{
	console.log("Student nije položio");
}

// 8. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

let dan = vreme.getDay();

if(dan == 0){
	console.log("Danas je vikend")
}
else if(dan == 6){
	console.log("Danas je vikend")
}
else{
	console.log("Danas je radni dan")
}

/* 9. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati
popodne i u ostalim slučajevima ispisati dobro veče.*/

sati

if(sati < 12){
	console.log("Dobro jutro");
}
else if(sati < 18){
	console.log("Dobar dan");
}
else{
	console.log("Dobro veče")
}

// 10. Uporediti dva uneta datuma i ispisati koji od njih je raniji.

let dat1 = 1996;
let dat2 = 1999;

if(dat1 > dat2){
	console.log(`${dat2} je raniji`)
}
else{
	console.log(`${dat1} je raniji`)
}

// 11. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

sati
if(sati < 9){
	console.log("Firma ne radi")
}
else if(sati > 17){
	console.log("Firma ne radi")
}
else{
	console.log("Firma radi")
}

