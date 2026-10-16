
/*
let result = 10

function calculate() {
  let result = 30
  return result
}

result = calculate()

console.log(result)
*/

// თავიდან არის გლობალური ცვლადი , შემდეგ calculate() ში იქმნება ახალი let result = 30, არც არის ლოკალური ცვლადი, ამ მნიშვნელობა შემდეგ ღებულობს გლობალური ცვალადი
//თუ წაიშლება return შესაბამისად ვერარაფერი დაბრუნდება

let result = 10

function calculate() {
    let result = 30
    return result + 20
}

result = calculate()

console.log(result)