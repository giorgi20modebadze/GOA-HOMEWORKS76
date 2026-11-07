let prices = [100, 250, 80, 400, 150, 50]

for (let i = 0; i < prices.length; i++){
    if (prices[i] > 100){
        console.log(prices[i])
    }
}

for (let i = 0; i < prices.length; i++){
    prices[i] = prices[i] + 20
    if (prices[i] > 200){
        prices[i] = prices[i] - 50
    }
}

console.log(prices)

let count = 0
for (let i = 0; i < prices.length; i++){
    if (prices[i] < 100){
        count++
    }
}

console.log(count)