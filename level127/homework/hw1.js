
let age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"))
let price = Number(prompt("შეიყვანეთ ბილეთის საწყისი ფასი:"))


if (age < 0 || price < 0 ){
    console.log("შეცდომა: ასაკი ან ბილეთის ფასი არ შეიძლება იყოს უარყოფითი!")
}else {
    let finalPrice

    
    if (age < 7){
        finalPrice = 0
    } else if (age >= 7 && age <= 17){
        finalPrice = price * 0.5
    } else if (age >= 18 && age <= 59){
        finalPrice = price
    } else if (age >= 60) {
        finalPrice = price * 0.7
    }


    if (age < 18 || age >= 60){
        console.log("You have a discount")
    }

    console.log(`ბილეთის საბოლოო ფასი: ${finalPrice}`)
}