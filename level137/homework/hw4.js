let scores = [45, 78, 92, 34, 88, 67, 100, 56]

scores.unshift(50)
scores.push(73, 85)
let index92 = scores.indexOf(92)
scores.splice(4, 2)
scores.splice(6, 1, 70)
let newScores = scores.slice(4)
let combinedScores = newScores.concat([95, 81, 60])
combinedScores.pop()
combinedScores.unshift(99)
let scoresString = combinedScores.join(" / ")
let finalScoresArray = scoresString.split(" / ")

console.log(finalScoresArray)
console.log(Array.isArray(finalScoresArray))

