let count = 0
let positive = 0
let negative = 0
let sum = 0
let num

do {
  num = Number(prompt("enter the number: "))
  if (num !== 0) {
    count++
    sum += num
    if (num > 0) {
      positive++
    } else {
      negative++
    }
  }
} while (num !== 0)


console.log(count)
console.log(positive)
console.log(negative)
console.log(sum)