
// clone Array
// exact copy of the array by creating new array

let ar1 = [1,2,3,4];
//first method
let ar2 = ar1.slice(0);

console.log(ar1===ar2);

// second method
let ar3 = [].concat(ar1);
console.log(ar1===ar3);

// third method
// spread operator(...)

let ar4 = [...ar1].concat("vishal");
console.log(ar4);
console.log(ar1===ar4);