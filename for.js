let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// lower triangle
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
        console.log(matrix[i][j])
    }
}

// each row
for (let element of matrix) {
    console.log(element)
}

// flatten
let myNewArray = matrix.flat()
console.log(myNewArray)