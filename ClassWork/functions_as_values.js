// My function is the value of a variable
// Anonymous functions are functions without a name

let a = function (){
console.log("Hello");
}
a()

//Callback functions
function people(){
    console.log("Hey there");
};
function newest(){
    console.log(45);
    people()
}
newest()

let nums = [1,4,6,2,5]
let b = nums.map(a=> a*2)
console.log(b);

function greet(){
    console.log("Hey, Murugi is a JS developer");
}

function morning(){
    var talk = "Johnte"
    console.log(talk);
}

morning(greet())