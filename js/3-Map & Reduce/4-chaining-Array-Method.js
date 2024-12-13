// And we can ‘chain’ these higher order functions - pass the output of one as the input of the next

const array = [1,2,3,4,5,6];
const greaterThan2 = num => num > 2;
const add = (a,b) => a + b;
const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add,0);
console.log(sumOfGreaterThan2);

// — The output of each higher order function (HOF), where it’s an array, has access to all the HOFs (map, filter, reduce) through the prototype chain