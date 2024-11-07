// ARRAYS _____________________________________________________________________

const myArr = [1,2,3,4,5 ,"SHARIQ ALAM"];
 console.log(myArr);

 const myHeroes = ["superman", "spiderman" , "ironman"]
 console.log(myHeroes);


 const myArr2 = new Array(1,2,3,4)
 console.log(myArr2[0]);

// // _____________________________________________________________________________

// // ARRAY METHODS


// // 1 : 
 myArr.push(6)
 myArr.push(7)
 myArr.push("SHARO-COD")          // TO ADD SOMETHING TO AN ARRAY
 console.log(myArr);


// // 2 :

 myArr.pop()
 console.log(myArr);             //  IT REMOVES THE LAST VALUE



// // 3 : 
 myArr.unshift("sharo-cod")     // TO ADD SOMETHING TO THE START  
 console.log(myArr);

// // 4 :
 myArr.shift(    )
 console.log(myArr);           // TO REMOVE SOMETHING FROM THE START


// // 5 :
 console.log(myArr.includes(9));                //   CHECK OUT THE VALUES THAT EXIST OR NOT 
 console.log(myArr.includes("SHARIQ ALAM"));

// // 6 :
 const newArr = myArr.join();
 console.log(myArr);                    // CHANGES ARRAY INTO THE STRING AND SEPERATE IT ALL
console.log(newArr);              

// ____________________________________________________________________________

// SLICE AND SPLICE :

console.log("A ", myArr);

const  myn1 = myArr.slice(0,2)

console.log(myn1);
console.log("B " ,myArr);

const  myn2 = myArr.splice(1,3)
console.log(myn2);
