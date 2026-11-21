let num

do {
  num = Number(prompt("enter possitive number: "))
  if (num <= 0) {
    console.log("შეიყვანე 0-ზე მეტი რიცხვი")
  }
} while (num <= 0)

console.log("Valid Number!")