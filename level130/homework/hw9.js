const login = function(username, password){
    return username === "admin" && password === "1234"? "Login successful" : "Invalid username or password"
    
}

console.log(login("admin", "1234"))
console.log(login("adimw", "489194"))
