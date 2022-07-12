let num = [1,2,"3",[4]];
console.log(num.length);

let a = "foo";
let m = a.concat("bar");
console.log(m);

class Pupil{
    constructor(name){
        this.name = name;
    }
}

pupil = new Pupil("Bree");
console.log(pupil.name);
Pupil.prototype.age = 22;
console.log(pupil.age);

var d = "24";
console.log(Number(d)+3);  //explicit coercion
console.log(typeof(d));

let v =4;
let h = 4 + "Hey";         //implicit coercion
console.log(h);
console.log(typeof(h));


let b = ["mango", "banana", "pawpaw"];

let c = new Array("Bot","Man");


console.log(c);

b.push("orange")
b.pop()
b.unshift("grapes")
b.shift()
console.log(b);

let d = b.map(item => `I love ${item}`)

let e = b.map(function(item){
    return `I love ${item}`
})

console.log(e);

let fruits = ["mango", "apple", "melon", "berries", "kiwi"]
console.log(fruits.splice(2,2));