let playerPower = Math.floor(Math.random() * 21) + 10
let monsterPower = Math.floor(Math.random() * 21) + 10


if (playerPower === 20){
    playerPower += 5
}
if (monsterPower === 15){
    monsterPower += 10
}

console.log(playerPower)
console.log(monsterPower)

console.log(playerPower > monsterPower ? "მოთამაშე იგებს!" : monsterPower > playerPower ? "მონსტრი იგებს!" : "ფრეა!")