
function displayCar(brand = "Unknown", year = 2020, color = "Black"){
   console.log(`Brand: ${brand}, Year: ${year}, Color: ${color}`)
}

displayCar("BMW")
displayCar("Mercedes", 2022)
displayCar("Audi", 2023, "Red")
displayCar()





function compareNumbers(num1, num2) {
    return num1 > num2  ? "first is bigger" : num2 > num1 ? "second is bigger" : "equal"
}




console.log(compareNumbers(10, 5))
console.log(compareNumbers(3, 8))
console.log(compareNumbers(4, 4))







