//  TRUTHY AND FALSY VALUES


// const userEmail = []

// if (userEmail) {
//     console.log("Got User Email");
// }else{
//     console.log("Dont Have Any Email");
    
// }


// 1 : FALSY VALUES

// false 
// 0
// -0
// BigInt 0n = falsy value
// ""                                   // These All are Falsy Values
// null
// undefined
// NaN

// 2 : TRUTHY VALUES 
// "0"
// 'false' OR "false"
// " Something in string would be a truthy value "
// []
// {}
// function(){}





//  if (userEmail.length === 0) {
//     console.log("Array is Empty"); 
//  }

//  const EmptyObject = {}

//  if (Object.keys(EmptyObject).length === 0) {
//     console.log("Object Is Empty");
//  }



// =================================================

// Nulish Collison Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20 

console.log(val1 );


//  TERNIARY OPERATOR
// SYNTAX = condition ? true : false

const  iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More Than 80");



  