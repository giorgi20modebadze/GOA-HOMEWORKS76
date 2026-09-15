let userName = prompt("შეიყვანეთ სახელი:").trim()
let age = Number(prompt("შეიყვანეთ ასაკი:"))
let ticketType = prompt("შეიყვანეთ ბილეთის ტიპი (standard / vip):").toLowerCase().trim()

if (userName.toLowerCase() === "admin") {
    console.log("ადმინისტრატორისთვის ბილეთი უფასოა")
} 
