// 1. Ispisati brojeve od 1 do 20, svaki u novom redu.

let i = 1;
while(i <= 20){
	console.log(i);
	i++;
}

// 2. Ispisati brojeve od 1 do 20, sve u istom redu.

i = 1;
let rez = "";
while(i <= 20){
	rez = rez + i + " ";
	i++;
}
console.log(rez);

// 3. Ispisati brojeve od 20 do 1.

i = 20;

while(i >= 1){
	console.log(i);
	i--;
}

// 3.1 Ispisati brojeve od 20 do 1 sve u istom redu.
i = 20;
let rez1 = "";

while(i >= 1){
	rez1 = rez1 + i + " ";
	i--;
}
console.log(rez1);

// 4. Ispisati parne brojeve od 20 do 1.

i = 20;

while(i >= 1){
	if(i % 2 == 0){
		console.log(i);
	}
	i--;
}

// 5. Šest paragrafa naizmenično obojiti sa tri različite boje.



// 6. Odrediti sumu brojeva od 1 do 100

let s = 0;
i = 1;
while(i <= 100){
	s+=i;
	i++;
}
console.log(s);

// 7. Odrediti sumu brojeva od 1 do n

s = 0;
let n = 54;
i = 1;

while(i <= n){
	s += i;
	i++;
}
console.log(s);

// 8. Odrediti sumu brojeva od n do m

s = 0;
n = 24;
let m = 42;
i = n;

while(i <= m){
	s += i;
	i++;
}
console.log(s);

// 9. Odrediti proizvod brojeva od n do m

n = 24;
m = 32;
let p = 1;
i = n;

while(i <= m){
	p *= i;
	i++;
}
console.log(p);

// 10. Odrediti sumu kvadrata brojeva od n do m

n = 32;
m = 34;
s = 0;
i = n;

while(i <= m){
	s += i**2;
	i++;
}
console.log(s);

// 11. Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 15;
i = 1;
let br = 0;

while(i <= k){
	if(k%i == 0){
		br++;
	}
	i++;
}
console.log(br);