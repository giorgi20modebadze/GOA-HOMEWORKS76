let ages = [12, 17, 20, 15, 25, 16]

for (let i = 0; i < ages.length; i++){
    ages[i] = ages[i] + 1
    if (ages[i] < 18){
        ages[i] = 18
    }
}

console.log(ages)