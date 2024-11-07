const marvelHeros = ["thor", "ironman","spiderman"]
const dcHeros = ["superman" , "flash" , "batman"]

// marvelHeros.push(dcHeros);                                     //ADD ARRAY TO AN ARRAY
// console.log(marvelHeros);
 
let allheros = marvelHeros.concat(dcHeros)                      //ADD ARRAY TO AN ARRAY
console.log(allheros);


const allnewhearos = [...marvelHeros,...dcHeros]
console.log(allnewhearos);


let numbers = [1,2,3,[4,5,6],7,8,[9,10]];
let realNumbers = numbers.flat(Infinity)        // MAKES ALL THE ARRAYS IN ONE ARRAY
console.log(realNumbers);



console.log(Array.isArray("SHARIQ ALAM"));              // BOOLEAN ( IS ARRAY OR NOT A ARRAY)
console.log(Array.from("SHARIQ ALAM"));                // CONVERT INTO AN ARRAY


let score1 = 100; 
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));                              // IT MAKES A ARRAY FROM SET OF ELEMENTS



// _______________________________END____________________________________________________