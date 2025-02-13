// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "Hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`SpiderMan Power is ${this.spiderman}`);
//     }
// }

// Object.prototype.shariq = function(){
//     console.log(`Shariq Is Present In All`);
// }

// Array.prototype.Heyshariq = function(){
//     console.log("Shariq Says Hello");
    
// }

// myHeros.shariq()
// myHeros.Heyshariq()






const User = {
    name:  "Shariq_Alam",
    email: "ShariqAlam@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailible: false
}

const TASsupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 


// Modern Syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)

let AnotherUserName = "Sharo_             "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Lenght Is : ${this.trim().length}`);
}

AnotherUserName.trueLength()
"ShariqAlam".trueLength()
"IceTea".trueLength()