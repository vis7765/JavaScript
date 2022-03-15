
// how to iterate objects value

const person = {
    name:"Vishal",
    age:23,
    hobbies : ["Cricket","movies"]
}

for(let key in person){
    console.log(key+":"+person[key]);
}

for(let key in person){
    console.log(`${key}` +" : "+`${person[key]}`);
}


// computed properties

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj = {
    [key1] : value1,
    [key2] : value2
};
console.log(obj);

// Another Way
const obj1 = {}
    obj1[key1] = value1,
    obj1[key2] = value2

console.log(obj);


// objects inside the array

const users =[
    {userId : 1,firstName :"Vishal",gender:'male'},
    {userId : 2,firstName :"Mohit",gender:'male'},
    {userId : 3,firstName :"Somya",gender:'female'},
    {userId : 4,firstName :"Ritish",gender:'male'},
];

//console.log(users);

for(let user of users){
    console.log(user.firstName);
}