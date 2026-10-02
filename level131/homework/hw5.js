let checkExam = (score, maxScore) => ((score / maxScore) * 100) >= 90 ? "Excellent": ((score / maxScore) * 100) >= 75 ? "Very Good": ((score / maxScore) * 100) >= 60 ? "Passed": "Failed"

console.log(checkExam(45, 50))
console.log(checkExam(32, 50))