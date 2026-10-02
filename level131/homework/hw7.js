let checkPassword = password => password.length >= 8 ? "Valid password" : "Too short"

console.log(checkPassword("hello"))
console.log(checkPassword("javascript"))

