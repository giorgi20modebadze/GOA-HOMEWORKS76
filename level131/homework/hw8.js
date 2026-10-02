let getOrderPrice = (price, quantity, delivery) => {
  return price * quantity + (delivery === "express" ? 15: 5)

}


console.log(getOrderPrice(100, 3, "standard"))
console.log(getOrderPrice(100, 3, "express"))
