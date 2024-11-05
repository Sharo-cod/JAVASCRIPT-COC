// const score = 400 
// console.log(score);

// // Note :: WRITE A NUMBER LIKE THIS 

// const Balance = new Number(200);
// console.log(Balance);

// console.log(Balance.toString());  // IT IS NOW CHANGED TO A STRING
// console.log(Balance.toString().length); 
// console.log(Balance.toFixed(1));    //   PRECISION VALUE ADDED 

// const otherNumber = 123.89
// console.log(otherNumber.toPrecision(4)); //IT GIVES THE PRESIZE VALUE UP TO 21 ( ROUND OFF THE VALUE ) 

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString());



//  ++++++++++++++++++++++++ -MATHS- ++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3247));        // IT CHANGES THE SIGN TO POSITIVE ONLY NOT POSITIVE TO NEGATIVE
console.log(Math.round(5.6));       // IT ROUND OFF THE NUMBER  
console.log(Math.min(2,4,6,7,9));   //shows the bigger value of all
console.log(Math.max(2,4,6,7,9));   //shows the smaller value of all

console.log(Math.random());
console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)+min)) 