let text = "   JavaScript is GREAT!!! JavaScript is POWERFUL!!!   "

console.log(text.trim().replaceAll("JavaScript", "JS").replaceAll("!!!", "!").slice(0, 30) + "...")