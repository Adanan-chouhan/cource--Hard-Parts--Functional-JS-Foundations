// // Reduce as the most versatile function in programming

const multiplyBy2 = x => x * 2
const add3 = x => x + 3
const divideBy5 = x => x / 5

const reduce = (array, howToCombine, buildingUp) => {
    for (let i = 0; i < array.length; i++) {
        buildingUp = howToCombine(buildingUp, array[i])
    }
    return buildingUp
}

const runFunctionOnInput = (input, fn) => {
    return fn(input)
}

const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11)
console.log(output); // 5 

// 2 => Example
// Listing out our ‘lines of code’ (functions) by name with each one’s consequence limited to only affect the next ‘line’ (function call/invocation)

// const multiplyBy2 = x => x*2
// const add3 = x => x+3
// const divideBy5 = x => x/5
// const subtract4 = x => x-4
// const reduce = (array, howToCombine, buildingUp) => {
//         for (let i = 0; i < array.length; i++){
//  buildingUp = howToCombine(buildingUp, array[i])
//  }
//  return buildingUp
// }

// const runFunctionOnInput = (input,fn) => { return fn(input) }

// const output = reduce([
//  multiplyBy2,
//  add3,
//  divideBy5,
//  subtract4
//  ],
//  runFunctionOnInput, 11
// )

// console.log(output); // 1