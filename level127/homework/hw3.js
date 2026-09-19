
let price = 250
let age = 22
let isMember = true


if (price < 0) {
    console.log("Invalid price")
} else {
    let discount = 0

    
    if (isMember && price > 200){
        discount = 25 
    } else if (age >= 60 && price > 100){
        discount = 15 
    } else if (isMember || age < 18) {
        discount = 10
    } else {
        discount = 0
    }

    let finalPrice 

    
    console.log(`საწყისი ფასი: ${price}`)
    console.log(`ფასდაკლება: ${discount}`)
    console.log(`გადასახდელი თანხა: ${finalPrice}`)
}