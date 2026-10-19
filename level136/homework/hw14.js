let students = ["Nika", "Ana", "Gio", "Mariam", "Luka"]
let newStudents = ["Saba", "Data"]

let extended = students.concat(newStudents)
extended.unshift("Goga")
extended.splice(2,0, "Elene")
let students3 = extended.slice(4,7)
extended.pop()

console.log(extended)
console.log(students3)


