
const calculatePrice = function (product, price, quantity = 1){
    let result

    if (price <= 0){
        result = "Invalid price"
    } else if (quantity <= 0){
        result = "Invalid quantity"
    } else{
        let total = price * quantity

        if (total >= 100){
            total = total * 0.9
        }

        result = `Product: ${product}, Total: ${total}`
    }

    return result
}


const result1 = calculatePrice("Laptop", 150)
const result2 = calculatePrice("Book", 30, 2)
const result3 = calculatePrice("Phone", -50, 1)
const result4 = calculatePrice("Mouse", 20, 0)
