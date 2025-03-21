// Suppose we have a function copyArrayAndMultiplyBy2. Let's diagram it out

const copyArrayAndMultiplyBy2 = (array) => {
    const output = [];
    for(let i = 0; i < array.length; i++){
        output.push(array[i] * 2);
    }
    return output;
}

const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray);
console.log(result); // [2,4,6]

// What if want to copy array and divide by 2?

const copyArrayAndDivideBy2 = (array) => {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(array[i] /2);
 }
 return output;
}
const myArray2 = [1,2,3]
const result2 = copyArrayAndDivideBy2(myArray);
console.log(result2); // [ 0.5, 1, 1.5 ]
