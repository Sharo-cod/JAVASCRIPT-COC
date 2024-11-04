// PRIMITIVE DATATYPES
// THERE ARE 7 CATEGORIES = string , number , boolean , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const OutsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber = 23974023834902380938409n
console.log(typeof bigNumber);



// REFERENCE ( NON PRIMITIVE DATATYPES )

// Arrays , Objects , functions 

const heroes = ["Superman" , "Spiderman" , "Ironman"]    //    = ARRAYS

let MyObject = {

    Name: "Shariq Alam",            // THIS IS OBJECT
    Age: 17,                    

}

let Afunction = function(){
    alert("THIS IS SHARIQ ALAM  :)")    // THIS IS A FUNCTION
}
console.log(typeof Afunction);




/*    IMPORTANT
.............................................................................................


Type of val	               Result

1: Undefined	               "undefined"

2: Null	                   "object"

3: Boolean	                   "boolean"

4: Number	                   "number"

5: String	                   "string"

6: Object                     (native and does not implement [[Call]])	"object"

7:Object                     "function"
(native or host and         //
does implement [[Call]])    //

8: Object(host and 
does not
implement [[Call]])          	Implementation-defined except may not be "undefined", "boolean", "number", or "string"

..........................................................................................

*/

// 1 : STACK (Primitive)

// 2 : HEAP (Non-Primitive)

let myyoutubename = "Shariq alam"

let anothername = myyoutubename;

anothername = "SHARIQ"
console.log(myyoutubename);
console.log(anothername);

let user1 = {
    email : "SHARIQALAM@gmail.com",
    pay : "user@pay"

}

let user2 = user1;
user2.email = "Shariqalam@gmail.com"
console.log(user1.email);
console.log(user2.email);

