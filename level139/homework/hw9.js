let points = [15, 40, 65, 20, 90, 35, 100]

for (let i = 0; i < points.length; i++){
    if (points[i] < 50){
        points[i] = points[i] + 10
    } else if (points[i] >= 50 && points[i] <= 80){
        points[i] = points[i] + 5
    } else if (points[i] > 80){
        points[i] = points[i] - 10
    }
}

console.log(points)

let count = 0
for (let i = 0; i < points.length; i++){
    if (points[i] > 50){
        count++
    }
}

console.log(count)