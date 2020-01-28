// converting a for loop to forEach
const item = ['item1', 'item2', 'item3'];
const copy = [];
// before as a for loop
for (let i=0; i<item.length; i++) {
    copy.push(item[1]);
}
// as a forEach
item.forEach(function (item) {
    copy.push(item);
});


function counter() {
    this.sum = 0;
    this.count = 0;
}
counter.prototype.add = function (array) {
    array.forEach(function (entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    };
const obj = new counter();
obj.add([2, 5, 9])
console.log(obj.count);
console.log(obj.sum)

// function copy1(obj) {
//     const copy1 = Object.create(Object.getPrototypeOf(obj));
//     const propNames = object.getOwnPropertyNames(obj);
//     propNames.forEach(function(name) {
//         const desc = Object.getOwnPropertyDescriptor(obj, name);
//         object.defineProperty(copy, name, desc);                                                                                                                                
//     });
//     return copy1;
// }
// const obj1 = {a: 1, b:2 };
// const obj2 = copy1(obj1);

const items = [1, 29, 47];
const copy1 = [];
items.forEach(function(items) { 
    copy1.push(items*items)
});
console.log(copy1);
