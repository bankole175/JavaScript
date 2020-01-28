let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let push = myFish.push('Titus');
console.log(myFish);
console.log(push);


let myNewFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let popped = myNewFish.pop();
console.log(myNewFish);
console.log(popped);


let newFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let unshif = newFish.unshift('rice');
console.log(newFish);
console.log(unshif);


let Fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let shif = Fish.shift();
console.log(Fish);
console.log(shif);

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((x, y) => 
x + y, 100);
console.log(sum);