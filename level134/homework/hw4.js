let shot = Math.floor(Math.random() * 100) + 1

console.log(shot)

let score = (shot > 80) ? 20 : (shot > 50) ? 10 : 0


console.log(score)