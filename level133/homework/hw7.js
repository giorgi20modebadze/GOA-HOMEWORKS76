let player = Math.floor(Math.random() * 21) + 10
let monster = Math.floor(Math.random() * 21) + 10


if (player === 25){
    player += 10
}

console.log("Player: " + player)
console.log("Monster: " + monster)


console.log(player > monster ? "მოთამაშე იგებს" : monster > player ? "მონსტრი იგებს" : "ფრე")