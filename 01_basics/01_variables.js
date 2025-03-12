const accountId =1543;
let accountEmail = "ayush3006@gmail.com"
var accountPassword = "12345"
accountCity ="jaipur"

// accountId=2; //not allowed

console.log(accountId);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity]);

accountEmail="hi@gmail.com"
accountCity="Bengaluru"
accountPassword="15333"
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var, because of the issue in the block scope and the functional scope

*/

if (5>4) {
    print("Hello Baby");
    
}