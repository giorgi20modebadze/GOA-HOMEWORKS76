let hero = Math.floor(Math.random() * 21) + 20
let monster = Math.floor(Math.random() * 21) + 15


hero = (hero === 30) ? hero + 10 : hero
console.log(hero, monster)



console.log(hero > monster ? "გმირმა მოიგო!" : monster > hero ? "მონსტრმა მოიგო!" : "ბრძოლა ფრედ დასრულდა!")




