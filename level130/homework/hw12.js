let calculateDelivery = function(city, distance, isExpress = false){
    let price = distance <= 5 ? 5 : distance <= 15 ? 10 : distance <= 30 ? 20 : 30
    if (isExpress) price += 10
    return `Delivery to ${city}: ${price} GEL`
}


console.log(calculateDelivery("Tbilisi", 10, true))
console.log(calculateDelivery("Batumi", 4))
console.log(calculateDelivery("Kutaisi", 35, true))