let n = Number(prompt("enter the number n: "))
let i = 1
let sum = 0
let count = 0
while (i <= n){
    sum += i
    count++
    i++
}


let average = sum / count

console.log(sum)
console.log(average)