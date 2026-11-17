let secretNumber = 17
while (true){
    let num = Number(prompt("enter the number: "))
    if (num < secretNumber){
        console.log("Too low!")
    } else if (num > secretNumber){
        console.log("Too high!")
    } else {
        console.log("Correct!")
        break
    }
}