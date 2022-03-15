
// function declaration

function sumTwoNumber(num1 , num2){
    return num1+num2;
}

console.log(sumTwoNumber(4,8));

// even or not even function

function isEven(num){
    if(num%2==0)
        return true;
    return false;
}
console.log(isEven(180));

// Create a function which return first character

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar(("hero")));

// create a function which return the index of targeted value

function findTarget(array, target){
    for(let i =0;array.length;i++){
        if(array[i]===target)
            return i;
    }
    return -1;
}

const myArray = [1,2,5,"Hello",4];
console.log(findTarget(myArray,4));

// Function expression

const isOdd = function(num){
    return num%2!==0;
    return false;
}

console.log(isOdd(5));

// Arrow Function

const palindromeNumber = (num) => {
    var n = num;
    var sum =0;
    while(num>0){
        let r =parseInt( num%10);
        sum = sum*10 +r;
        num =parseInt( num/10);
    }
    if(sum==n)
        return true;

    return false;
}
console.log(palindromeNumber(121));

// function inside function

 function app(){
    const hello = function(){
        console.log("Hello World");
    }
    const addTwo = (num1,num2)=>{
        return num1+num2;
    }
    const multi = (num1,num2) => num1*num2;

    console.log("inside function");
    hello();
    console.log(addTwo(2,8));
    console.log(multi(2,9));

}
app();