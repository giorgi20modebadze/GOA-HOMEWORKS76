let age = 19
let hasTicket = true
let isVip = false

console.log(age < 18  ? "Too Young" : (age >= 18 && !hasTicket) ? "No Ticket" : isVip ? "VIP Entrance" : "Normal Entrance")