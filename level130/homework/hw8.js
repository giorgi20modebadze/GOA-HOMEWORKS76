const getFinalPrice = function(price, discount){
    return price - (price * discount / 100)
}

console.log(getFinalPrice(100, 20))
console.log(getFinalPrice(200, 15))