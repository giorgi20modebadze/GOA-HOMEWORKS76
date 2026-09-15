let userName = prompt("შეიყვანეთ მომხმარებლის სახელი:").trim()

if (userName === ""){
    console.log("სახელი აუცილებელია")
}else if (userName.length < 3){
    console.log("სახელი ძალიან მოკლეა")
}else if (userName.length > 12){
    console.log("სახელი ძალიან გრძელია")
}else if (userName.startsWith("admin")){
    console.log("ადმინისტრატორის სახელის გამოყენება აკრძალულია")
}else {
    console.log("მომხმარებლის სახელი მიღებულია")
}