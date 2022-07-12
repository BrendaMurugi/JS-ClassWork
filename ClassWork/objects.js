var people = {
    name: "Brenda",
    country: "Kenya",
    age: 22
};
console.log(people['name']);
console.log(people.country);

var person = new Object(people);
console.log(person.name);

person["age"] = 45;
console.log(person);

for([key, values] of Object.entries(people)){
    console.log(`${key}: ${values}`);
}

// Object.freeze(person)
person['school'] = "AkiraChix"



Object.seal(person)
person['age'] = 22
console.log(person);

var student = {
    name: "Murugi",
    age: 22,
    country: "Ethiopia",
    hobby:function(){
        console.log(`My name is ${this.name} and my hobby is singing`);
        return "I love swimming.";
    },
    friends:{
        name: "Chekko",
        age: 24,
        hobby:{
            first:"Cooking",
            play:function(){
                return "I love playing"
            }
        }
    }
};
console.log(student.hobby());
console.log(student.age);
console.log(student.friends.name);
console.log(student.friends.hobby.play());