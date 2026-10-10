let player1 = Math.floor(Math.random() * 21) + 10
let player2 = Math.floor(Math.random() * 21) + 10

let pr1 = player1 === 20? player1 += 5 : player1
let pr2 = player2 === 20? player2 += 5 : player2

console.log("Player 1: " + pr1)
console.log("Player 2: " + pr2)

console.log(pr1 > pr2 ? "Player 1 wins!" : pr1 < pr2 ? "Player 2 wins!" : "ფრეა!")


