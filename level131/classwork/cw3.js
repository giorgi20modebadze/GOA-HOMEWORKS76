
let login = (password, email) => {
    return (password === "123" && email === "gegimagaria@gmail.com") ? "login success" : "error"
}


console.log(login("123", "gegimagaria@gmail.com"))
console.log(login("wrong123", "gegimagaria@gmail.com"))
console.log(login("123", "wrongemail"))