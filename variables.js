const accountId = 11223344
let accountEmail = "Shariqalam@gmail.com"
var accountPassword = "12345"
accountCity = "Mingora"
let accountState;

/* ................................NOTES.........................
                                 |------|
 accountId = 22 THIS CHANGES ARE NOT ALLOWED IN CONST VARIABLES
 NEVER USE SOMETHING LIKE THE accountCity = "Mingora"
 NEVER USE VAR VARIABLE BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE */


accountEmail = "sa@gmail.com"
accountPassword = "87876"
accountCity = "saiduswat"

console.log(accountId);
console.table([accountEmail , accountId , accountPassword , accountCity , accountState])
