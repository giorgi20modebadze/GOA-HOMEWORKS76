let groupA = ["Nika", "Ana", "Gio"]
let groupB = ["Mariam", "Luka", "Saba"]
let groupC = [["Data", "Elene"], ["Sandro", "Nino"]]


console.log(Array.isArray(groupA))
console.log(Array.isArray(groupB))
console.log(Array.isArray(groupC))

let groupAB = groupA.concat(groupB)
let extendedc = groupC.flat()
let fullExtended = groupAB.concat(extendedc)
fullExtended.unshift("Goga")
fullExtended.push("Tornike")
fullExtended.splice(1,2)

let fullExtended2 = fullExtended.toSpliced(4,1, "Mariam K.")
console.log(fullExtended2)

fullExtended2.slice(4,6)

fullExtended2.pop()
fullExtended2.shift()
console.log(fullExtended)
console.log(fullExtended2)