//primitive: number, string, boolean, undefined, null, symbol, bigInt


const score=100;
const bonus=20.3;
let isLoggedIn=false;

const temp=null;
let userEmail;

const id= Symbol("123");
console.log(id);
const anotherId= Symbol("123");
console.log(anotherId);

console.log(id==anotherId);
console.log(id===anotherId);


const bigNum=123456778654n;
console.log(typeof bigNum);

//non-primitive(reference type): object, array, function

const heroes=["shaktimaan","krish","naagraj","doga"];

console.log(heroes);

let myObj={
    name:"ayush",
    bestFriend:"drishti",
    age:20,
    isLoggedIn:true
}
// printObj(myObj);
const myFunction=function printObj(obj){
    console.log(obj);
}
function printObj1(){
    console.log("Hello World");
}
console.log(myFunction(myObj));

console.log(typeof bigNum);

console.log(typeof null)

console.log(typeof undefined)

console.log(typeof myFunction)

console.log(typeof printObj);

console.log(typeof heroes);

console.log(typeof printObj1);

//return types
// typeof null=>object
// typeof undefined=>undefined
// typeof function=>function
// typeof array=>object
// typeof object=>object
// typeof number=>number
// typeof string=>string
// typeof boolean=>boolean
// typeof symbol=>symbol
// typeof bigNum=>bigint
// typeof NaN=>number
// typeof Infinity=>number
// typeof myFunction=>function
// typeof printObj1=>function
// typeof printObj=>undefined
// typeof heroes=>object
console.log(typeof(console.log("Hello World"))); 