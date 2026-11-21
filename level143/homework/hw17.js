let numbers = [12, 8, 5, 14, -3, 9, -7, 20]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    console.log(numbers[i])
    break
  }
}