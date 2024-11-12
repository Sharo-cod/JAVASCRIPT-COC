const user = {
    username : "SHARIQ ALAM",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website `);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "SHARIQ ALAM"
//     console.log(this.username);
// }                                                           // THIS WONT WORK
// chai()
// ----------------------------------------------

// const chai =  () => {
//     let username = "SHARIQ ALAM"
//     console.log(this);
// }
// chai()

// ARROW FUNCTION

// Basic Arrow Function
const addTwo = (num1, num2) => {
    return num1 + num2
}


// Implicit return 
// const addTwoNums = (num1, num2) =>  num1 + num2
// OR
const addTwoNums = (num1, num2) => ( num1 + num2 )



console.log(addTwo(6 , 1));
console.log(addTwoNums(3, 1));


const myArray = [ 2 ,5 ,6 ,7 ,8 ]
