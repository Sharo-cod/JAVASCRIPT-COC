// DATES 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());  //DIFFERENT TYPES OF DATES
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);       //TYPE OF DATE

// let myCreatedDate = new Date( 2024, 10, 19)
// console.log(myCreatedDate.toDateString());  

// let newDate = new Date()
// console.log(newDate.toDateString());

// let myCreateDate = new Date(2023 ,0 ,3)
// console.log(myCreateDate);


// let myCreateDate = new Date(2023 ,0 ,23 ,5,3)
// // console.log(myCreateDate);


// let myTimeStamp =Date.now()  //MILLI SECONDS
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // SECONDS

let myDate = new Date()
console.log(myDate);
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(myDate.getTime());

myDate.toLocaleString('default',{
    weekday : "long"
});
console.log(myDate);
