// JAVASCRIPT EXECUTION CONTEXT 

// 1 : GLOBAL EXECUTION CONTEXT                       THESE TWO ARE MOST USED EXECUTION CONTEXT 
// 2 : FUNCTIONAL EXECUTION CONTEXT 

// 3 : EVAL EXECUTION CONTEXT  

// THERE ARE TWO PHASES IN JS CODE

//  1 : MEMORY CREATION PHASE  
//  2 : EXECUTION PHASE

// LET A CODE = 
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result = console.log(addNum(val1,val2))
let result2 =  console.log(addNum(10,2))

// 1: GLOBAL EXECUTION ===> this
/*
[

2: MEMOEY PHASE OR CREATION PHASE 
VAL1 ===> UNDEFINED 
VAL2 ===> UNDEFINED
addNum ===> Definition     ====== from line 16 to line 19
result1 ===> undefined
result2 ===> undefined


] */

/*   EXECTION PHASE 
[

val1 === 10
val2 === 5
addNum === new variable environment + execution phase 


]*/