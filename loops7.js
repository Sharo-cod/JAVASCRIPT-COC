const myNums = [1,2,3]

// const myTotals = myNums.reduce( function (acc, curval) {
//     console.log(`acc : ${acc} and Curval : ${curval}`);
    
//     return acc + curval
// }, 0 )
// console.log(myTotals);



// const myTotals1 = myNums.reduce( (acc,curval) => acc + curval,0 )
// console.log(myTotals1);

const shoppingCard = [
    {
        itemName :  "Js Course",
        Price :     2999
    },
    {
        itemName :  "python Course",
        Price :     999
    },
    {
        itemName :  "C++ Course",
        Price :     1999
    },
    {
        itemName :  "MObile dev Course",
        Price :     5999
    }
]

const total = shoppingCard.reduce( (acc ,item) =>acc + item.Price, 0   )
console.log(total  );
