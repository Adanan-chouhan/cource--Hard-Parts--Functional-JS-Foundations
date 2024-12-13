// Calling a function inside the function call in which it was defined

const outer = () => {
 let counter = 0;
 const incrementCounter = () => {
 counter ++;
 }
 incrementCounter();
}

outer();

// What determines what data your function have access to when you call the function? Where we call it?