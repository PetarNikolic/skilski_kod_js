// Kreiranje objekta BLOG

let blog = {
    title: 'Moj prvi blog',
    content: 'Neki tekst...',
    author: 'PN'
};
console.log(blog);
console.log(typeof blog);
console.log(typeof 5);
console.log(typeof'Petar');
console.log(typeof true);

// Pristupanje osobini
// 1. nacin
console.log(blog.title);
// 2. nacin
console.log(blog['title']);

// Izmena neke osobine
// 1. nacin
blog.title = 'Moj prvi blog!';
console.log(blog);

//2. nacin
blog['title'] = 'Moj prvi blog!!!';
console.log(blog);

console.log("Test poruka");