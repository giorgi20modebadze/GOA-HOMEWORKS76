let email = "   goga.chalauri@gmail.com   "


let email2 = email.trim().slice(0, 13).replaceAll(".", "_")



console.log(email2)