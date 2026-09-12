

let price = 80
let quantity = 4
let discount = 20
const currency = "GEL"

price *= quantity
price -= discount


console.log("Total: " + price + " " + currency)


console.log(`Total: ${price} ${currency}`)


console.log(typeof price)
console.log(typeof quantity)
console.log(typeof discount)
console.log(typeof currency)