// if
if(true){
    // Will Execute 
}
if(false){
    // Will Not Execute
}
// =====================================================================
/*
[
<  les then
>  greater then
<= less or equals 
>= greater or equals
=  operator asignment
== equals to
!= not equals
=== equals to and also check the type i.e ( 2 === "2" ) it will also check the type of  this expression [ THIS IS ALSO KNOWN AS STRICED EQUAL].
]
*/
// const Temperature = 41;
// if(Temperature === 41){
//    console.log("less then 50");
// } else{
//    console.log("Tmperatue is greater then 50");
// }
// console.log("Execute");
const score = 200;
if (score){
const power = "fly"
// console.log(`User Power : ${power}`);
}
// console.log(`User Power : ${power}`);  it will not run because of scope instead it can run when you use the var

// Default Statement  ----
const balance =  1000;
// if (balance > 500)  console.log("test"),console.log("test2"); // DONT WRITE A CODE LIKE THIS

// if (balance < 500) {
//     console.log("less than");
// } else if(balance < 750){
//     console.log("Less Than 750");
// }else if(balance < 900){
//     console.log("Less Than 900");
// }else {
//     console.log("Less Than 1200");
// }

// =============================================================

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if (userLoggedIn && debitCard ) {
    console.log("Allow To Buy Courses");
}

 if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User Is Logged In");
    
}
// =============================== End ================================