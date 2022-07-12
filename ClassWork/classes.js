// class Students{
//     constructor(name, age, school){
//         this.name = name
//         this.age = age
//         this.school = school
//         this.hobby = function(){
//             return "I love JS"
//         }
//     }
// }
// Students.prototype.country = "Kenya"

// var student1 = new Students("Chekko", 24, "AkiraChix");
// console.log(student1.country);
// console.log(student1.hobby());


// function Students(name, age, school){
//     this.name = name
//     this.age = age
//     this.school = school
//     this.hobby = function(){
//             return "I love JS"
//         }
// }

// var student2 = new Students("Nakimuli", 23, "AkiraChix");
// console.log(student2);

// var names = ["Chiri", "Zipporah", "Shamim"];
// var[conslate, susan, bree] = names
// console.log(conslate);
// console.log(bree);

// names[0] = "Bree"
// console.log(names);

class Fruits{
    constructor(orangePrice){
        this.orangePrice = orangePrice
        this.calculateFruitcost = function (fruitName, quantity){
            return `${quantity} ${fruitName} for KES ${orangePrice * quantity}.`
        }
    }
}
var orange = new Fruits(30.00)
console.log(orange.calculateFruitcost('orange',2));

// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"

// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
// and takes two parameters (fruit, quantity) when initialized i.e.
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the
// getTotalCost( ) method.
// kioskCalc.getTotalCost( ) // returns “2 orange for KES 60”

class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitsPriceList = {"orange": 30, "mango": 15, "avocado": 40}
        this.getTotalCost() = () => {
            
        }
    }
}
