
//Objects are reference type data tpye
// objects stores key paired values;
// objects don't have index.


// object key is String in data type by default.

// creating object



const person = {
    firstName:"Vishal",
    age:23
};
console.log(person);
// array can also be add in object
const person1 = {
    firstName:"Vishal",
    age:23,
    hobbies :["cricket","music","coding"]
};
console.log(person1.hobbies[2]);

// Accessing object data

let name = person.firstName;
console.log(name);

// adding extra pair value in objects

person.gender ="Male";
console.log(person);