let phone = " +995-599-12-34-56 "


let result = phone.trim().replaceAll("-", "").slice(-9)



console.log(result)