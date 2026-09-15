
let userName = prompt("შეიყვანეთ სახელი:").trim().toLowerCase()

if (userName === "goga") {
    console.log("გამარჯობა, გოგა!")
}else if (userName === "admin"){
    console.log("მოგესალმები ადმინისტრატორო!")
}else {
    console.log("მომხმარებელი ვერ მოიძებნა")
}