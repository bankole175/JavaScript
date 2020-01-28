let name = 'john';
let age = 20;
let job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(name + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(name + ' drives an uber in Lagos');
        break;
    case 'designer':
        console.log(name + ' desighns beautiful websites');
        break;
    default:
        console.log(name + ' does something else');
        break;
}

switch (true) {
    case age < 13:
        console.log(name + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(name + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(name + ' is a young man.');
        break;
    default:
        console.log(name + ' is a man.');
        break;
}


function tipCalculator(bill) {
    let percentage;
    bill < 50 ? percentage = .2
    : bill >= 50 && bill < 200 ? percentage = .15
    : percentage = .1;
    return percentage * bill;
}
let bill = [124, 48, 268];
let tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[0])];
console.log(tips);

let finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(finalValues);


let arr = [30, 5, 20 ,60, 10]
 let descendingArr = arr.sort((a,b)=> {
    return a -b;
});
let sortedArr = descendingArr.reverse();
 console.log(arr.reverse());


