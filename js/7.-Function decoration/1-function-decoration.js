// To add a permanent memory to an existing function we have to create a new function that will run the existing function inside of itself

const oncify = (convertMe) => {
    let counter = 0;
    const inner = (input) => {
        if(counter === 0){
            const output = convertMe(input);
            counter++;
            return output;
        }
        return "sorry counter is not Zero";
    } 
    return inner
}

const multiplyBy2 = num => num * 2;

const oncifiedMultiplyBy2 = oncify(multiplyBy2);
console.log(oncifiedMultiplyBy2(10));  // 20
console.log(oncifiedMultiplyBy2(7));   // "sorry counter is not Zero"