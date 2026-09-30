let calculate = function(num1, num2, operation){
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-"){
        return num1 - num2;
    } else if (operation === "*"){
        return num1 * num2;
    } else {
        return "wrong operation"
    }
}


console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "*"))
console.log(calculate(10, 5, "-"))