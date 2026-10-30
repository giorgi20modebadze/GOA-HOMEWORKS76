let students = [ "Nika", "Ana", "Gio", "Mariam", "Luka", "Saba", "Elene"]

students.unshift("Data", "Tako")
students.pop()
let mariamIndex = students.indexOf("Mariam")
students.splice(4,2)
students.splice(5,0, "Irakli")
let newStudents = students.slice(4,8)
let names = ["Giorgi", "Salome"]
let extended = newStudents.concat(names)
let joinedStudents = students.join(", ")
let finalList = joinedStudents.split(", ")
let check = Array.isArray(finalList)









