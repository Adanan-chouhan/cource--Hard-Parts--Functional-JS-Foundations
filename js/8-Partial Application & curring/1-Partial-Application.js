// It’s known as ‘Partial application’

const multiply = (a, b) => a * b
function prefillFunction (fn, prefilledValue){
 const inner = (liveInput) => {
 const output = fn(liveInput, prefilledValue)
 return output
 }
 return inner
}
const multiplyBy2 = prefillFunction(multiply, 2)
const result = multiplyBy2(5)
console.log(result); // 10

// 2 => Example 
// function multiply(a, b) {
//     return a * b;
//   }
  
//   // Function decoration to prefill 'a'
//   function prefillMultiply(a) {
//     return function(b) {
//       return multiply(a, b);  // 'a' is already prefixed in the backpack
//     };
//   }
  
//   const multiplyByTwo = prefillMultiply(2);  // '2' is now prefixed
  
//   console.log(multiplyByTwo(5));  // Output: 10
  console.log(multiplyByTwo(10)); // Output: 20
  