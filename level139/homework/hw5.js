let scores = [45, 90, 67, 32, 100, 75, 50]

for (let i = 0; i < scores.length; i++){
    console.log(scores[i])
}

for (let i = 0; i < scores.length; i++){
    if (scores[i] > 60){
        console.log(scores[i])
    }
}

for (let i = 0; i < scores.length; i++){
    if (scores[i] < 50){
        scores[i] = 50
    }
}
console.log(scores)

let count = 0
for (let i = 0; i < scores.length; i++){
    if (scores[i] >= 70){
        count++
    }
}
console.log(count)

let maxScore = scores[0]
for (let i = 1; i < scores.length; i++){
    if (scores[i] > maxScore){
        maxScore = scores[i]
    }
}

console.log(maxScore)