let getResult = function(name, score, bonus = 0){
    let total = score + bonus
    return `${name} - ${total >= 90 ? "Excellent" : total >= 70 ? "Good" : total >= 50 ? "Passed" : "Failed"}`
}


console.log(getResult("ნიკა", 85, 10))
console.log(getResult("ანა", 75))
console.log(getResult("ლუკა", 40))