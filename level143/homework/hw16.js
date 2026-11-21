let correctPassword = "admin123"
let attempts

for (attempts = 1; attempts <= 5; i++) {
  let password = prompt("enter the password: ")
  if (password === correctPassword) {
    console.log("Login Successful!")
    break
  }
}

if (attempts > 5) {
  console.log("Account Locked!")

}

