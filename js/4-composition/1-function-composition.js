// We could keep track with global variables

// const multiplayBy2 = x => x * 2;
// const add = x => x + 3;
// const divideBy5 = x => x / 5;

// const initialResult = multiplayBy2(11);
// const nextStep = add(initialResult);
// const finalStep = divideBy5(nextStep);

// console.log("finalStep", finalStep);  // finalStep 5

// But that’s risky, people can overwrite

// Or we can use the fact that JavaScript evaluates every function call before it moves on

const multiplyBy2 = x => x*2
const add3 = x => x+3
const divideBy5 = x => x/5
const result = divideBy5(add3(multiplyBy2(11)))
console.log(result); // 5

// Now this is pretty unreadable though (Btw This relies on our functions being ‘referentially transparent’ - we can replace the call to the function with its return value with no consequences on our app)