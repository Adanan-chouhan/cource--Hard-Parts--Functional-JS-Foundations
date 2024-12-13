const array = [1,2,3];
const multiplayBy2 = num => num * 2;

const result = array.map(multiplayBy2);
const newResult = array.map(multiplayBy2);

console.log(result);    // [2,4,6]
console.log(newResult); // [2,4,6]

// If we want the only consequence of map to be on that line and to achieve ‘referential transparency’ (I can the function call with its output and it’s the same) - then I need to preserve my data and not manipulate it

// JavaScript passes a reference (‘link back’) to the arr when it’s inserted into the function map. If we change (‘mutate’) the input array our function is not pure - it’s unpredictable - I can’t figure out what it does just be reading it and looking at its output there in that line - undoes all our hard work

let originalArray = [1, 2, 3];

function addElementImmutable(arr, element) {
  return [...arr, element];  // Nayi array banayi gayi original array ko modify kiye baghair
}

let newArray = addElementImmutable(originalArray, 4);

console.log(originalArray); // [1, 2, 3] - Original array unchanged
console.log(newArray);      // [1, 2, 3, 4] - Nayi array jisme 4 add ho gaya
