// The function is known as reduce - it can handle a remarkable range of tasks
// 1 => Example Normal function 
const reduce = (array,howTOCombine,buildingUp) => {
    for(let i = 0; i < array.length; i++){
        buildingUp = howTOCombine(buildingUp,array[i]);
    }
    return buildingUp;
}

const add = (a,b) => a + b;

const summed = reduce([1,2,3],add,0);
console.log(summed);  // 6


// 2 => Example Built in Reduce Array Mehod
const arr = [1,2,3,4,5];
const sum = arr.reduce((acc,item) => acc + item);
console.log(sum); // 15