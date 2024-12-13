// This is not the same as defining a function

const num = 3;
const multiplyBy2 = (inputNumber) => {
 const result = inputNumber*2;
 return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
console.log(output); // 6
console.log(newOutput) // 20 

// When you execute a function you create a new execution context comprising:
// 1. The thread of execution (we go through the code in the function line by line)
// 2. A local memory ('Variable environment') where anything defined in the function is stored