// Every line is an independent, labelled piece of code where we know exactly what data it uses and affect Therefore a lot of our functions are going to be just
// 1. Take Input
// 2. Use the input in some way
// 3. Return that as the output in the same line.
// Arrow functions let us condense our functions to show this

// Let’s review our use of copyArrayAndManipulate

const copyArrayAndManipulate = (array, instructions) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

const multiplyBy2 = (input) => {
    return input * 2
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);