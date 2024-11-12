

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
    // console.log("INNER : ", a);
    
}                                   // THIS IS WHY WE USE ( let )
// console.log(a);

// ======================================================================================



// function one(){
//     const username = "SHARIQ ALAM"

//     function two(){
//         website = "YOUTUBE"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// one()


if (true) {
    const username1 = "Shariq Alam"
    if (username1 === "Shariq Alam") {
        const wesite1 = "Youtube"
        console.log(username1 + wesite1);
    }
    // console.log(wesite1);
}
// console.log(username1);


// =============================== INTERESTING ================================


// addOne(3)
// function addOne(num){
//     return num + 1                     // THIS DOESN'T GIVE AN ERROR WHILE THE OTHER ONE GIVES A ERROR
// }                                      // WHEN THE DECELERATION IS PLACED BEFORE THE INITILIAZATION  


addTwo(10)
const addTwo = function(num){
    return num + 2
}


// ============================= END =============================