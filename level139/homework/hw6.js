let numbers = [5, 12, 8, 21, 30, 7, 16]
let newNumbers = []

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        newNumbers.push(numbers[i] * 3)
    }
}

console.log(newNumbers)
