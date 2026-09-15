let text = prompt("შეიყვანეთ წინადადება:").trim()

if (text === ""){
    console.log("ტექსტი არ შეგიყვანია")
}else if (text.toLowerCase().startsWith("javascript")){
    console.log("ეს ტექსტი JavaScript-ზეა")
}else if (text.length > 20){
    console.log(text.slice(0, 10))
}else if (text.endsWith("!")){
    console.log("ტექსტი ემოციურია")
}else if (text.endsWith("?")){
    console.log("ეს შეკითხვაა")
}else if (text("bad")){
    console.log(text.replaceAll("bad", "good"))
}else {
    console.log(text.toUpperCase())
}