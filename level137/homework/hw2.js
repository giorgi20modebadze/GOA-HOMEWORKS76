let text = "HTML,CSS,JavaScript,React,Node.js,Python"

let technologies = text.split(",")
text.unshift("Git")
text.push("TypeScript")
let reactIndex = text.indexOf("React")
text.splice(1,2)
let newTechnologies = text.slice(0,4)
let joinedText = text.join(" - ")
let splitedProducts = joinedText(" - ")

console.log(technologies)
console.log(reactIndex)
console.log(joinedText)
console.log(splitedProducts)



