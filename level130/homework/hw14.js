const withdraw = function(balance, amount, fee = 2){
    let rem = balance - (amount + fee)
    return amount <= 0 ? "Invalid amount" : amount + fee > balance ? "Not enough money" : rem > 1000 ? `Withdrawal successful. High balance: ${rem}` : rem >= 100 ? `Withdrawal successful. Balance: ${rem}` : `Warning! Low balance: ${rem}`
}

console.log(withdraw(1500, 200))
console.log(withdraw(500, 200))
console.log(withdraw(100, 50))