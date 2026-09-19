let num = Number(prompt("enter the number:"))

if (num > 10 && num % 2 === 0){
    console.log("good number")
}else{
    console.log("bad time")
}




let userName = prompt("enter the name:");


if (userName.length > 5 || userName.toLowerCase().startsWith('g')) {
  console.log("good name")
}else {
  console.log("bad name")
}