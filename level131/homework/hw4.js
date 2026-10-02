let getAgeCategory = (age) => age <= 12 ? "Child" : age <= 17 ? "Teenager" : age <= 59 ? "Adult" : "Senior"

console.log(getAgeCategory(15))
console.log(getAgeCategory(25))
console.log(getAgeCategory(70))