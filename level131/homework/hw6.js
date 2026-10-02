let withdraw = (balance, amount) => amount <= 0 ? "Invalid amount": amount > balance ? "Not enough money": balance - amount




console.log(withdraw(1000, 300))
console.log(withdraw(1000, 1500))
console.log(withdraw(1000, 0))