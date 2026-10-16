/*
let points = 100;

function first() {
  let points = 50;

  function second() {
    points = points + 25;
    console.log(points);
  }

  second();

  console.log(points);
}

first();

console.log(points);

*/

// pirveli dabeWdavs 75,მეორეც 75 , საბოლოოდკი 100
//second() ფუნქცია ცვლის first() არსებულ let points = 50 ცვლადს

//შეცვლილი

let points = 100

function first() {
    let points = 50

    function second() {
        let points = points + 25
        console.log(points)
    }

    second()
    console.log(points)
}

first()
console.log(points)
