

// {}   THIS IS CALLED AS SCOPE OR THIS IS A SCOPE
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);




// if (true) {
//     let a = 10;
//     const b = 20;          // <=  THIS  CONTENT IS A BLOCK SCOPE AND ALL CONTENT OUTSIDE IS A GLOBAL SCOPE
//     var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);         // THIS IS WHY ( var ) IS NOT USED IN NOWADAYS



a = 300 
if (true) {
    let a = 30 
    console.log("INNER : ", a);
    
}                                   // THIS IS WHY WE USE ( let )
console.log(a);

// ======================================================================================
