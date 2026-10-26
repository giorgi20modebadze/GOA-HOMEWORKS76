let products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"]

products.unshift("Mouse")
products.push("Headphones", "Speaker")

let removedElement = products.shift()
let monitorIndex = products.indexOf("Monitor")
products.splice(2, 1, "Smartwatch")

let newArray = products.slice(2, 6)
let joinedProducts = products.join(" | ")
 console.log(products)
 console.log(removedElement)
 console.log(monitorIndex)
 


