const calculatePrice = function(price, quantity, discount = 0){
    return discount === 10? price * quantity * 0.9 : discount === 20 ? price * quantity * 0.8 : price * quantity
}

console.log(calculatePrice(50, 2))
console.log(calculatePrice(50, 2, 10))
console.log(calculatePrice(50, 2, 20))