let teamA = ["Nika", "Ana", "Gio"]
let teamB = ["Mariam", "Luka", "Saba"]

let extended = teamA.concat(teamB)
extended.unshift("Goga")
extended.push("Data")
extended.pop()
console.log(extended)

let newArray = extended.slice(0,4)
console.log(newArray)




