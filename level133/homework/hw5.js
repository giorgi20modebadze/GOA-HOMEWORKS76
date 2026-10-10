let car1 = Math.floor(Math.random() * 51) + 50
let car2 = Math.floor(Math.random() * 51) + 50

console.log("Car 1: " + car1)
console.log("Car 2: " + car2)

if (car1 > 90){
    console.log("🔥 Super fast!")
}
if (car2 > 90){
    console.log("🔥 Super fast!")
}

console.log(car1 > car2 ? "Car 1 wins!" : car1 < car2 ? "Car 2 wins!" : "ფრეა!")