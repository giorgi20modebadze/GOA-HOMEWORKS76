const bookTicket = function(movie, age, ticketCount = 1){
    if (ticketCount <= 0) return "Invalid ticket count"
    let singlePrice = age < 12 ? 10 : age <= 17 ? 12 : 15
    return `${movie} - ${ticketCount} tickets - ${singlePrice * ticketCount} GEL`
}

console.log(bookTicket("Interstellar", 20, 2))
console.log(bookTicket("Avatar", 10, 1))
console.log(bookTicket("Inception", 15, 0))