// var passed = 3;

// var addTo = function() {
//     var inner = 2;
//     return passed + inner
// }
// var passed = 4;

// console.dir(addTo);

let f = () => {
    let i = 1;
    let j = 5;
    return () => {
        console.log(i);
        console.log(j);
        
    }
};

console.dir(f());

