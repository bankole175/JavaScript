let username = "ba n kole";
let trimWhitespace = username.split(' ').join('');
console.log(trimWhitespace);

let username1 = "ba n kole";
let trimWhitespace1 = username1.replace(/\s/g, '');
console.log(trimWhitespace1);


let fruits = ["Banana", "Orange", "Apple", "Mango"];
let findInd = fruits.indexOf("Apple");
console.log(findInd);