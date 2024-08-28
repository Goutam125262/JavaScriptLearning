const accountId=144553
let accountEmail="goutam@gmail.com"
var accountPassword="12345"
accountCity="Indore" //without use any variable keyword  resovre memory of variable not use this

let accountState 
/* 
  Perfer not to use var 
  beasuse of issue in block scope and functional scope

*/
// accountId=2 //not allowd
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])