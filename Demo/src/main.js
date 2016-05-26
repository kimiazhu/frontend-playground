/**
 * Created by kc on 5/12/16.
 */
//"use strict"
function Demo(foo, bar) {
    this.foo = foo;
    this.bar = bar;

}

Demo.prototype = {
    get three() {
        return "three";
    }
}

var demo = new Demo();
console.log(demo)

demo.foo = 10
demo.bar = "test"

console.log("xxxxx")
console.log(demo.three)
demo.three = 4
console.log(demo.three)

demo.bar = 1.23
console.log(demo)

function Demo2(p) {
    if (p instanceof Demo && ("rar" in p))
        console.log("OOO: " + p.bar)
    return Object.create(p)
}

Demo.prototype.four = "DDD"
Demo2.prototype = Demo.prototype

var demo2 = new Demo2(new Demo("foo", "bar!!!"))

console.log("--------")
console.log(Demo2.prototype)

console.log(demo.four)
demo.four = "five"
demo2.four = "five"
console.log(demo2.four)
delete demo.four
console.log("--------")
console.log(demo2.four)
console.log(Object.getPrototypeOf(demo2))

console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(demo2), "four"))

function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    context.fillStyle = "#EEEEFF";
}

