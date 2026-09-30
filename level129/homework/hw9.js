function checkProduct(name, price, budget){
    console.log(budget >= price ? `You can buy ${name}.` : `You cannot buy ${name}.`)
}

checkProduct("Phone", 800, 1000)
checkProduct("Laptop", 2000, 1000)