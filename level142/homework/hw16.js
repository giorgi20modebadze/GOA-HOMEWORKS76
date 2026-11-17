let first = [10, 20, 30, 40]
let second = [20, 50, 40, 60]

for (let i = 0; i < first.length; i++){
    for (let j = 0; j < second.length; j++){
        if (first[i] === second[j]){
            console.log(first[i])
        }
    }
}