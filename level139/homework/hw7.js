let numbers = [12, -5, 8, -20, 0, 15, -3, 7]

let positiveCount = 0
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        positiveCount++
    }
}
console.log(positiveCount)

let negativeCount = 0
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < 0){
        negativeCount++
    }
}
console.log(negativeCount)

let sum = 0
for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
}
console.log(sum)

let positiveNumbers = []
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        positiveNumbers.push(numbers[i])
    }
}
console.log(positiveNumbers)

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < 0){
        numbers[i] = 0
    }
}
console.log(numbers)
