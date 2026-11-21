let secretNumber = 7
let myNumber

do {
  myNumber = Number(prompt("გამოიცანი რიცხვი:"))
  if (myNumber !== secretNumber) {
    console.log("incorrect, try again")
  }
} while (myNumber !== secretNumber)

console.log("You Win!")
