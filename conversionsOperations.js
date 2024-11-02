 let score = "shariq alam";

 console.log(typeof(score));
 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

let isLoggedIn = ""               // 1 = true ,  while 0 = false   ,  value like "shariq" = true
let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn);
 

let someNumber = 33;

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber); 


//  ************************OPERATIONS******************

 let Value = 3
 let negValue = -3
 console.log(negValue);


// Different Operations 

 console.log(2+2);  //addition
 console.log(2-2);  //subtraction
 console.log(2*2);  //Multiplication
 console.log(2**2); //Power
 console.log(2/2);  //Division
 console.log(2%2);  //Percentage 

// -----------------------------------------------------------
// WE CAN ALSO ADD STRINGS :

 let str1 = "Hello"
 let str2 = " Shariq alam"
 let str3 = str1 + str2
 console.log(str3);

// ------------------------------------------------------------

 console.log("1" + 2 );
 console.log(1 + "2" );
 console.log("1" + 2 + 2 );
 console.log(1 + 2 + "2" );

 console.log( 3 + 4 * 5 % 3 ); // DONT WRITE LIKE THIS 
 console.log( ( ( 3 + 4 ) * 5 ) % 3 ); //WRITE LIKE THIS

// -------------------------------------------------------------

 console.log(+true);
 console.log(+""); // DONT DO THIS 

// -------------------------------------------------------------

 let x = 4;
 ++x
 console.log(x)