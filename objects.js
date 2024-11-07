// THERE ARE TWO WAYS TO DECLARE OBJECTS
// 1 :  SINGLETON
// 2 :  OBJECT LITERALS
        // Object.create   // ==>  THIS IS MADE THROUGH CONSTRUCTOR METHOD


// OBJECT LIETERALS :


// NOTE ::::::
//IF YOU WANT TO DECLARE A SYMBOL AND WANT TO ADD IT INTO THE OBJECTS YOU SHOULD USE THE SQAURE BRACKETS OTHERSWISE IT WON'T BE A SYMBOL IT WILL BE A STRING        
// FOR EXAMPLE :
let  mySym = Symbol("key1");


const jsUser = {
    name : "SHARIQ ALAM",
    age :  17,
    [mySym] : "mykey1",
    location : "PAKISTAN , SWAT",
    Email: "shariqalam4192@google.com",
    isloggedIn : false,
    lastLoggedin : ["Monday" , "Saturday"]
}

console.log(typeof jsUser[mySym]);
console.log(jsUser[mySym]);

console.log(jsUser);

//TWO WAYS TO DECLARE A OBJECT
// console.log(jsUser.Email);
// console.log(jsUser["Email"]);  //THIS IS THE BETTER WAY

