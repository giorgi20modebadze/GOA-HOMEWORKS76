let nums = [34, 68, 10, 47, 1, 15, 71, 33, 22]

for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){
        console.log(nums[i])
    }
}

/////////////

let nums1 = [34, 68, 10, 47, 1, 15, 71, 33, 22]

for (let i = 0; i < nums1.length; i++){
    if (nums1[i] % 2 !== 0){
        console.log(nums1[i])
    }
}


///////////
let names = ["გიორგი", "გოგა", "ნინო", "ლუკა", "გვანცა"]


for (let i = 0; i < names.length; i++){
    if (names[i].startsWith("გ")){
        console.log(names[i])
    }
}

///////////


let names1 = ["გიორგი", "გოგა", "ნინო", "ლუკა", "გვანცა"]

for (let i = 0; i < names1.length; i++){
    if (names1[i].startsWith("გ") && names1[i].length > 5) {
        console.log(names1[i])
    }
}

//////////////////////


let something = [10, "გიორგი", 25, "ნინო", 3.14, "ლუკა", true]


for (let i = 0; i < something.length; i++) {
    if (typeof something[i] === "string") {
        console.log(something[i])
    }
}



