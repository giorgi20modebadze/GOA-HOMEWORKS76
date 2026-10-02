let calculateFinalPrice = (price, quantity, discount, isMember) => (price * quantity * (discount > 0 ? (1 - discount / 100) : 1)) * (isMember ? 0.9 : 1)


console.log(calculateFinalPrice(100, 3, 20, true))





