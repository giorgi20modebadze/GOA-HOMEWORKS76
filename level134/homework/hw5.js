let secretNumber = Math.floor(Math.random() * 50) + 1
let myNumber = 25

let result = (myNumber === secretNumber) ? "მოიგე!" : (myNumber > secretNumber) ? "შეამცირე!" : "გაზარდე!"
console.log(result)

