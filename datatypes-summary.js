// PRIMITIVE DATATYPES
// THERE ARE 7 CATEGORIES = string , number , boolean , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const OutsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 1234324523n;
console.log(typeof bigNumber);            // bigInt




// REFERENCE ( NON PRIMITIVE DATATYPES )

// Arrays , Objects , functions 

const hereos = ["superman" , "spiderman" , "ironman"]    // Arrays

let myObj = {
    name : "SHARIQ ALAM",
    age : 17,
}

const myFunction = function(){
    alert("THIS IS DEVELOPER SHARIQ ALAM")
}

console.log(typeof bigNumber);
