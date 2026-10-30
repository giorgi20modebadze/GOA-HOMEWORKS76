let start = 15
let end = 85

let total = 0
let multOf3 = 0
let multOf3And5 = 0

for (let i = start; i <= end; i++){
    total++

    if (i % 3 === 0){
        multOf3++
    }

   
    if (i % 3 === 0 && i % 5 === 0){
        multOf3And5++
    }
}

console.log(total)
console.log(multOf3)
console.log(multOf3And5)