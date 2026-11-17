let i = 0
while (i < 20){
    console.log("giorgi")
    i++
}

////////

let j = 0
while (j <= 20) {
    console.log(j)
    j++
}


let l = 40
while (l <= 60){
    console.log(l)
    l++
}

//////////


let b = 20
while (b <= 50){
    if (b % 2 === 0){
        console.log(b)
    }
    b++
}

//////////////


let g = 20
while (g <= 50) {
    console.log(g)
    g += 3
}
//////////////

let names = ["giorgi", "data", "mari", "levani", "vato", "tako"]
let k = 0

while (k < names.length){
    if (names[k].length > 5){
        console.log(names[k])
    }
    k++
}


///////////

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = []
let f = 0

while (f < numbers.length){
    if (numbers[f] % 2 === 0){
        evenNumbers.push(numbers[f])
    }
    f++
}

console.log(evenNumbers)


///////////


let list1 = [49, "giorgi", true, 3.89, "coffee", false]
let n = 0

while (i < list1.length){
    if (typeof list1[n] === "string"){
        console.log(list1[n])
    }
    n++
}




