let numbers = [12, 5, 30, 18, 7, 42, 15, 60, 9]
let evenNumbers = []
let oddNumbers = []
let modifiedNumbers = []

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i])
    } else {
        oddNumbers.push(numbers[i])
    }
    
    if (numbers[i] > 20){
        modifiedNumbers.push(numbers[i] / 2)
    } else if (numbers[i] < 20){
        modifiedNumbers.push(numbers[i] * 2)
    }
}

console.log(evenNumbers)
console.log(oddNumbers)
console.log(modifiedNumbers)
