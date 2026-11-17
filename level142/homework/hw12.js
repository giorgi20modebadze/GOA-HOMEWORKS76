let sum = 0
while (true){
    let num = Number(prompt("enter the number for 0: "))
    if (num === 0){
        break
    }
    if (num > 0){
        sum += num
    }
}

console.log(sum)