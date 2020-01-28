function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);
console.log(another.draw());


let x = { value: 10};
let y = x;

x.value = 20;
console.log(y);
