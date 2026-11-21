let correctPassword = "javascript123"
let password

do {
  password = prompt("enter your password: ")
  if (password !== correctPassword) {
    console.log("incorrect password, please try again: ")
  }
} while (password !== correctPassword)

console.log("Access Granted!")