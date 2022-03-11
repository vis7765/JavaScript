
// Array is the collection of ordered element;

let num = [1,2,3,4,5];
let name = ["Vishal","Vikash","Suresh"];

//Feteching Array element
console.log(name);
console.log(name[2]);

// Array is mutable
// direct udpdate the original array

num[3] = 45;
console.log(num);

// Array can be mixed of different datatypes;

let mix = [1,4,3,2,'Hello','Buddy'];
console.log(mix);

// Push & pop is used for updating array from the last

let number = [1,2,3,4,5];
number.push(76);
console.log(number);

console.log(number.pop());
console.log(number);

//unshift and shift is used for the beginning of the array

number.unshift(0);
console.log(number);

console.log(number.shift());
console.log(number);