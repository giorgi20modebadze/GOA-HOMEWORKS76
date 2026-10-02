let calculatePrice = (price, quantity, discount) => discount >= 20 ? (price * quantity) * (1 - discount / 100): price * quantity



console.log(calculatePrice(100, 3, 20))