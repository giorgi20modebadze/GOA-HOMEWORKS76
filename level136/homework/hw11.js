let toys = ["Car", "Doll", "Ball", "Robot", "Puzzle"]

toys.splice(1,1)
toys.splice(1,0, "Teddy Bear")
toys.push("Lego")
let newArray = toys.slice(0,3)
console.log(newArray)
