let num = Number(prompt("შეიყვანეთ რიცხვი:"))


if (num === 0){
    console.log("Zero")
} else if (num > 0 && num > 100){
    console.log("Large positive number")
} else if (num > 0 && num < 100){
    console.log("Small positive number")
} else if (num < 0 && num % 2 === 0){
    console.log("Negative even number")
} else if (num < 0 && num % 2 !== 0){
    console.log("Negative odd number")
}


if (num >= 10 && num <= 20){
    console.log("Special range")
}