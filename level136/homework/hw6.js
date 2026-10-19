let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]

let newArray1 = cities.toSpliced(1,1)
let newArray2 = cities.toSpliced(2,1, "Gori")
let newArray3 = cities.toSpliced(2,0, "Zugdidi")
console.log(newArray1)
console.log(newArray2)
console.log(newArray3)
console.log(cities)
