let code = "AB-12-CD-34"


let code1 = code.replaceAll("-", "*")

let code2 = code1.slice(0, -2) + "##"



console.log(code2)

