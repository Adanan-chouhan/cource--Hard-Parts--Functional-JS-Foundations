// In fact we get a number of built-in higher order functions in JavaScript
// — map, forEach, filter, flatMap, reduce, reduceRight
// — All ‘iterate’ through each element of the array and run a function on each
// — But behave differently - MDN guides us

const array = [1,2,3,4,5,6];
const greaterThan2 = num => num > 2;
const filteredArray = array.filter(greaterThan2);
console.log(filteredArray);

// 2 => Example
const arr = [1,2,3,4,5,6];
const filterArray = arr.filter(item => item % 2 === 0);
console.log(filterArray);