//foreach, map, find, filter, reducer


const numbers = [10, 20, 30, 40, 50]

// numbers.forEach((item) => console.log(item))
const numbers1 = numbers.forEach((item) => item)
// console.log("numbers1", numbers1)

// numbers.map((item) => console.log(item))
const numbers2 = numbers.map((item) => item+1)
// console.log(numbers)
// console.log("numbers2", numbers2)


const foundValue = numbers.find((item) => item == 20)
// console.log(foundValue)

const filterArray = numbers.filter((item) => item < 40)
// console.log("Filtered Array", filterArray)


const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue)

// console.log("Sum", sum)







