let datum = new Date();
let dan = datum.getDay();
let sati = datum.getHours();

switch(dan){
	case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
	case 6:
		if((sati < 9) || (sati >= 17)){
            console.log("Ne radi");
            document.getElementById("slika").innerHTML = "<img src ='slike/zatvoreno.jpg'>"
		}
		else{
            console.log("Radi");
            document.getElementById("slika").innerHTML = "<img src ='slike/otvoreno.jpg'>"
		}
		break;
}
// Drugi zadatak
let mesec = getMonth();
let godina = getFullYear();

if(day == 0)
    console.log("Nedelja" + dan + mesec + godina);
else if(day == 1)
    console.log("Ponedeljak" + dan + mesec + godina);
else if(day == 2)
    console.log("Utorak" + dan + mesec + godina);
else if(day == 3)
    console.log("Sreda" + dan + mesec + godina);
else if(day == 4)
    console.log("Cetvrtak" + dan + mesec + godina);
else if(day == 5)
    console.log("Petak" + dan + mesec + godina);
else if(day == 6)
    console.log("Subota" + dan + mesec + godina);

/*
document.write(dan + mesec + godina)
switch(dan){
    case 0:
     document.getElementById("danIDatum").innerHTML = 
     document.write("Nedelja" + dan + mesec + godina);
    case 1:
        document.write("Ponedeljak" + datum);
    case 2:
        document.write("Utorak" + datum);   
    case 3:
        document.write("Sreda" + datum);
    case 4:
        document.write("Cetvrtak" + datum);
    case 5:
        document.write("Petak" + datum);
    case 6:
        document.write("Subota" + datum);
}*/
// Treci zadatak
/*let g = 230;
let c = 5;
let p = 10;


if((g * c) && (g * c -p)){
    console.log("Cena bez popusta je" "dinara", "cena sa popustom je" "dinara")
}
*/
// Cetvrti zadatak
if()



// Peti zadatk
let ukupno = 38;
let plava = 10;
let zuta = 20;
let pz = ukupno - (plava + zuta);

console.log(pz)
/*
    if((plava >= 10) && (zuta >= 10) && (pz >= 5)){
    console.log("Ekskluzivan");

    else{
    console.log("Nije ekskluzivan");
    }
}*/
switch(ukupno){
	case plava:
		console.log(plava >= 10 + "Ekskluzivan");
		break;
	case zuta:
		console.log(zuta >= 10 + "Ekskluzivan");
		break;
	case pz:
		console.log(pz >= 5 + "Ekskluzivan");
		break;
	default:
        console.log("Nije ekskluzivan");
}