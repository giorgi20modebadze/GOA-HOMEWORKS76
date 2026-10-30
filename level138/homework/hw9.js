let start = -20
let end = 30

let positiveNumbers = 0
let negativeNumbers = 0
let evenNumbers = 0
let totalSum = 0



for (let i = start; i<= end; i++){
    if (i > 0){
        positiveNumbers ++
    }
    if (i < 0){
        negativeNumbers ++
    }

    if (i % 2 === 0) {
        evenNumbers++
    }

    
    totalSum += i
}


console.log(positiveNumbers)
console.log(negativeNumbers)
console.log(evenNumbers)
console.log(totalSum)



