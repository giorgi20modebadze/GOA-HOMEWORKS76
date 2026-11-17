let num = Number(prompt("enter the positive number: "))
let i = 1
while (i <= num){
    if (num % i === 0){
        console.log(i)
    }
    i++
}