function calculate(a, b, operator){
    if (operator === "+") {
        console.log(a + b)
    }else if (operator === "-"){
        console.log(a - b)
    }else if (operator === "*"){
        console.log(a * b)
    }else if (operator === "/"){
        console.log(a / b)
    }else{
        console.log("incorrect operator")
    }
}


calculate(10, 5, "+")
calculate(10, 5, "-")
calculate(10, 5, "*")
calculate(10, 5, "/")

