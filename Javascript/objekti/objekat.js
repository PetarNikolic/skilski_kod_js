let blog1 = {
    title: 'Blog 1!',
    content: 'Text 1',
    likes: 0,
    dislikes: 50,
};

let blog2 = {
    title: 'Blog 2!!',
    content: 'Tekst 2',
    likes: 20,
    dislikes: 20,
};

let blog3 = {
    title: 'Blog 3?',
    content: 'Tekst 3',
    likes: 5,
    dislikes: 50,
};

let user = {
    username: 'JhonDoe',
    age: 30,
    blogs:['Title1', 'Title2', 'Title3'],
    login: function(){
        console.log("Ulogovani ste");
    },
    logBlogs: function(){
    this.blogs.forEach( b =>{
        console.log(b);
    });
    }
};

let arrBlogs = user.blogs;
// Ispis niza blogova
for(let i = 0; i < arrBlogs.length; i++){
    console.log(`Naslov bloga je: ${arrBlogs[i]}`)
}

// Ispis niza blogova foreach metodom

arrBlogs.forEach(
    blog => {
        console.log(`Naslov je ${blog}`);
    }
);

// Metod je u objektu
// Napraviti funkciju (to je izvan objekta)

// Dodavanje i povezivanje metoda

// Poziv metoda
user.login();

// Poziv propertija unutar metoda
user.logBlogs();

console.log(this);
// Kada this pozivamo izvan objekta, onda nam izbaci globalni objekat tj. window

// Niz objekata
let blogs = [blog1, blog2, blog3];

// Iteracija for petljom
for(let i = 0; i < blogs.length; i++){
   // console.log(blogs[i].title);
   console.log(blogs[i]['title']);
}

//Iteracija foreach nizom objekata - ispisivanje celih objekata
blogs.forEach( blog => {
    console.log(blog);
});


// Iteracija foreach nizom objekata - ispisivanje naslova
console.log(blog1.title);
blogs.forEach( blog =>{
    console.log(blog.title);
    // console.log(blog['title]);
});


// Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća ukupan broj lajkova
let ukupnoLajkova = blogs =>{
    let ukupno = 0;
    blogs.forEach( elem =>{
        ukupno += elem.likes;
    });
    return ukupno;
};

console.log(ukupnoLajkova(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz
// objekata, a ona vraća prosečan broj lajkova.

let prosecnoLajkova = niz =>{
    let ukupno = ukupnoLajkova(niz);
    let broj = niz.length;
    let avg = ukupno / broj;
    return avg;
}
console.log(prosecnoLajkova(blogs));

//Ispisati naslove onih blogova koji imaju natprosečan broj
//pozitivnih ocena i ispodprosečan broj negativnih ocena
let prosecnoDislike = niz =>{
    let ukupno = 0;
    niz.forEach(x =>{
        ukupno += x.dislikes;
    });
    let broj = niz.length;
    let avg = ukupno / broj;
    return avg;
};

// Napraviti arrow funkciju kojoj se prosleđuje niz
// objekata, a ona ispisuje sve one naslove blogova koji
// imaju više pozitivnih nego negativnih ocena.

let visePozitivnih = niz =>{
    niz.forEach( elem =>{
        let poz = elem.likes;
        let neg = elem.dislikes;
        if(poz > neg){
            console.log(elem.title);
        }
    });
}
visePozitivnih(blogs);


// Napisati arrow funkciju kojoj se prosleđuje niz objekata
// a ona ispisuje sve naslove koji se završavaju uzvičnikom.

let uzvicnik = blogs =>{
    blogs.forEach( blog =>{
        let naslov = blog.title;
        if(naslov.endsWith('!')){
            console.log(naslov);
        }
    });
};
uzvicnik(blogs);

// 

let user1 = {
    username: 'PetarNikolic',
    age: 23,
    blogs: [blog1, blog2, blog3],

    logBlogs: function(){
        this.blogs.forEach( b =>{
            console.log(b);
        });
    },

    logTitleBlogs: function(){
        this.blogs.forEach(b => {
            console.log(b.title);
        });
    }
};

console.log(user1);
user1.logBlogs();
user1.logTitleBlogs();

// Napraviti niz korisnika gde svaki od korisnika sadrži niz
// blogova. Svaki blog u ovom nizu je objekat.

let user2 = {
    username: 'PeraPeric',
    age: 16,
    blogs: [blog1, blog2]
};
console.log(user2);

let user3 = {
    username: 'AnaAntic',
    age: 29,
    blogs: [blog1, blog3]
};

// Niz korisnika
let users = [user1, user2, user3];

// Ispisati imena onih autora koji imaju ispod 18 godina

let mladjiOd18 = korisnici =>{
    korisnici.forEach(elem =>{
        let god = elem.age;
        if(god < 18){
            console.log(elem.username);
        }
    });
}
mladjiOd18(users);

// Ispisati naslove onih blogova koji imaju više od 50
// lajkova.
let popularniBlogovi = korisnici =>{
    korisnici.forEach(k => {
        let nizBlogova = k.blogs;
        nizBlogova.forEach(b => {
            let lajkovi = b.likes;
            if(lajkovi > 50){
                console.log(b.title);
            }
        });
    });
};
popularniBlogovi(users);
// ispisuje 2x, zato sto ispisuje za svakog korisnika

// Ispisati sve blogove autora čiji je username ’PetarNikolic’
let blogoviAutora = (korisnici, ime) =>{
    korisnici.forEach(k =>{
        // ako je korisnik neki tek onda ispisati njegove blogove
        if(k.username == ime){
            let nizBlogova = k.blogs;
            nizBlogova.forEach(b =>{
                console.log(b.title);
            });
        }
    });
};
blogoviAutora(users, 'PetarNikolic');
blogoviAutora(users, 'DjordjeDjordjevic');

//Ispisati imena onih autora koji imaju ukupno više od 100
//lajkova za blogove koje su napisali

let popularniAutori = autori =>{
    // sumLikes = 0; // ukupno lajkova za sve korisnike(autore)
    autori.forEach(a =>{
        let nizBlogova = a.blogs;
        let sumLikes = 0; //Pojedinacni korisnici
        nizBlogova.forEach(b =>{
            sumLikes += b.likes;
        });
        if(sumLikes > 100){
            console.log(a.username);
        }
    });
};
popularniAutori(users);



let popularniAutori2 = autori =>{
    // sumLikes = 0; // ukupno lajkova za sve korisnike(autore)
    autori.forEach(a =>{
        let nizBlogova = a.blogs;
        let sumLikes = ukupnoLajkova(nizBlogova);
        if(sumLikes > 100){
            console.log(a.username);
        }
    });
};
popularniAutori2(users);



// Ispisati naslove onih blogova koji imaju natprosečan broj
// pozitivnih ocena i ispodprosečan broj negativnih ocena
let superBlog = niz =>{
    let sum = 0; // Suma svih lajkova svih blogova
    let sumDis = 0; // Suma svih dislajkova svih blogova
    let br = 0; // Broj svih blogova
    niz.forEach(a =>{
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b =>{
            br++;
            sum += b.likes
            sumDis += b.dislikes;
        })
    });
    let avgLikes = sum / br;
    let avgDislikes = sumDis / br;

    niz.forEach(a =>{
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b =>{
            if(avgLikes < b.likes && avgDislikes > b.dislikes){
                console.log(b.title);
            }
        });
    });
};

superBlog(users);
