let secretNumber = 25
let attempts = 0
while (true){
    let num = Number(prompt("enter the number: "))
    attempts++
    if (num === secretNumber){
        console.log("You Win!")
        break
    } else {
        console.log("არასწორი პასუხია")
    }
    if (attempts === 3){
        console.log("You Lose!")
        break
    }
}