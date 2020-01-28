let arr = [2, 5, 8, 1, 4];
let sortedArr = arr.sort();
console.log(arr.sort());

let names = ["Manish", "RIshab", "Nitika", "Harshita" ];
let sortedNames = names.sort();
console.log(sortedNames);

let numbers = [70, 10, 5, 40, 30];
numbers.sort(function(a, b) {
    return a-b;
});
console.log(numbers);


let newNumbers = [70, 10, 5, 40, 30];
newNumbers.sort((a, b)=> {
    return a-b;
});
console.log(newNumbers);

let oldNumbers = [70, 10, 5, 40, 30];
let noCompare = oldNumbers.sort() 
console.log(noCompare);

let compareNumbers = [70, 10, 5, 40, 30];
compareNumbers.sort(function(a, b) {
    if (a<b)
    return -1;
    if (a>b)
    return 1;
    else
    return 0;
});
console.log(numbers);