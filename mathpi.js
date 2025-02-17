const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);



// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// __________________________________________________________________________________________________________________

const Chai = {
    name: 'Black Tea',
    price: 100,
    isAwailable: true,

    orderChai: function(){
        console.log("Chai Nhi Bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(Chai , "name"));

    Object.defineProperty(Chai, 'name', {
        // writable: false,
        enumerable: false
    })


    console.log(Object.getOwnPropertyDescriptor(Chai , "name"));


for (let [key , value] of Object.entries(Chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}