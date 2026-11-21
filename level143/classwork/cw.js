let secretNumber = 7
let num
let attempts = 0

do {
  num = Number(prompt("enter number: "))
  attempts++

  if (num === secretNumber){
    console.log("Correct! You guessed it!")
  } else{
    console.log("Try again!")
  }

} while (num !== secretNumber)

console.log(attempts)

