let students = ["Nika", "Ana", "Giorgi", "Luka", "Mariam", "Dato"]
let selectedStudents = []

for (let i = 0; i < students.length; i++){
    if (students[i].length > 4){
        selectedStudents.push(students[i])
    }
}
console.log(selectedStudents)

for (let i = 0; i < students.length; i++){
    if (students[i][0] === "M"){
        console.log("Special student: " + students[i])
    }
}

let count = 0
for (let i = 0; i < students.length; i++){
    if (students[i].length >= 5){
        count++
    }
}
console.log(count)