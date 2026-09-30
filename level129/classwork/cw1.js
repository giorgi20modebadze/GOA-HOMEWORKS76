let num = Number(prompt("enter the number: "))

switch(true) {
    case num > 0 && num % 2 === 0:
        console.log("positive even")
        break
    case num > 0 && num % 2 !== 0:
        console.log("positive odd")
        break
    case num < 0 && num % 2 === 0:
        console.log("negative even")
        break
    case num < 0 && num % 2 !== 0:
        console.log("negative odd")
    default:
        console.log(0)
        break
        




}