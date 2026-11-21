let sum = 0
let score

do {
  score = Number(prompt("enter the score: "))
  if (score !== 0) {
    sum += score
  }
} while (score !== 0)

console.log(sum)
