let names = ["Nika", "Ana", "Giorgi", "Mariam", "Luka"]

for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

for (let i = 0; i < names.length; i++){
    if (names[i].length > 4){
        console.log(names[i])
    }
}

for (let i = 0; i < names.length; i++){
    if (names[i][0] === "A"){
        console.log(names[i])
    }
}

for (let i = 0; i < names.length; i++){
    console.log(names[i] + "!")
}