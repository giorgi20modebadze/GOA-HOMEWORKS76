let count = 0
let num

do {
  num = Number(prompt("enter the number: "))
  if (num !== 0) {
    count++
  }
} while (num !== 0)

console.log(count)