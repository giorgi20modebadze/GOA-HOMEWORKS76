
let computer1 = Math.floor(Math.random() * 9) + 1
let computer2 = Math.floor(Math.random() * 9) + 1
let computer3 = Math.floor(Math.random() * 9) + 1

console.log(computer1, computer2, computer3)


let player1 = Number(prompt("enter the number:"))
let player2 = Number(prompt("enter the number:"))
let player3 = Number(prompt("enter the number:"))

console.log(player1, player2, player3)




console.log( player1 === computer1 && player2 === computer2 && player3 === computer3 ? "JACKPOT!" :(player1 === computer1 && player2 === computer2) || (player1 === computer1 && player3 === computer3) || (player2 === computer2 && player3 === computer3) ? "დიდი მოგება!" : player1 === computer1 || player2 === computer2 || player3 === computer3 ? "პატარა მოგება!" : "წააგე!")