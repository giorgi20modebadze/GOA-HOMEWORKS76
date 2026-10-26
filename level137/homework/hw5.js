let groups = [["Nika", "Ana", "Gio"],["Mariam", "Luka"],["Saba", "Elene", "Data"]]

let newGroup = groups.flat()
groups.unshift("Tako")
groups.push("Irakli", "Salome")
let lukaIndex = groups.indexOf("Luka")
newGroups.splice(3,2)
let newNames = newGroups.slice(0,5)
let combinedNames = newNames.concat(["Giorgi", "Sandro"])
let namesString = combinedNames.join(" * ")
let finalNamesArray = namesString.split(" * ")



console.log(groups)
console.log(finalNamesArray)

