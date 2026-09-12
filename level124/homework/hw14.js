let input = "   Hello!!! My name is Goga!!! I love JS!!!   "

let result = input.trim().replaceAll("!!!", "!").slice(0, 20) + "..."



console.log(result)



