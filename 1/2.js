numArray1 = [1, 5, 12, 4, 3]
numArray2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
numArray3 = [3, 10, 17]

function average(array) {
    let count = 0
    for(let i = 0; i < array.length; i++) {
        count += array[i]
    }

    return count / array.length
}

console.log(average(numArray1))
console.log(average(numArray2))
console.log(average(numArray3))

