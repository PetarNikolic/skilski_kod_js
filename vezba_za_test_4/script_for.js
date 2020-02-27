// 1. Ispisati brojeve od 1 do 20

let i = 0;

for(i = 0; i <= 20; i++){
	console.log(i);
}

// 2. Ispisati brojeve od 20 do 1

i = 20;

for(i = 20; i >= 1; i--){
	console.log(i);
}

// 3. Ispisati parne brojeve od 1 do 20


for(i = 2; i <= 20; i+=2){
	console.log(i);
}

// 4. Ispisati dvostruku vrednost brojeva od 5 do 15.

/*
for(i = 5; 5 <= 15; i++){
	i++;
	console.log(i);
}
*/
// 5. Odrediti sumu brojeva od 1 do 100

let s = 0;

for(i = 1; i <= 100; i++){
	s+=i;
}

console.log(s);