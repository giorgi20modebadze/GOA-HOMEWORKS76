let w1Attack = Math.floor(Math.random() * 21) + 10
let w1Defense = Math.floor(Math.random() * 21) + 5

if (w1Attack >= 25) {
    w1Attack += 5
}
if (w1Defense === 20){
    w1Defense += 10
}
let w1Sum1 = w1Attack + w1Defense


let w2Attack = Math.floor(Math.random() * 21) + 10
let w2Defense = Math.floor(Math.random() * 21) + 5

if (w2Attack >= 25) {
    w2Attack += 5
}
if (w2Defense === 20){
    w2Defense += 10
}
let w2Sum2 = w2Attack + w2Defense

console.log(w1Sum1)
console.log(w2Sum2)


console.log(w1Sum1 > w2Sum2 ? "Wizard 1 wins!" :w2Sum2 > w1Sum1? "Wizard 2 wins!" :"ფრეა!")