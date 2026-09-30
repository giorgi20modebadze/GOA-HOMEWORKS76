const checkAge = function(age){
    if (age >= 18){
        return "You are an adult"
    }else{
        return "You are underage"
    }
}


console.log(checkAge(20))
console.log(checkAge(15))
console.log(checkAge(18))