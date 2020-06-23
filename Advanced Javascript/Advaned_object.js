// refrence type

let obj1 = {value: 10};
let obj2 = obj1;
let obj3 = {value : 10};

// context vs scope

this.alert('hello');
// this refers to what object you are inside of.
const obj = {
    a: () => console.log(this),
}

// instantiation
class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}.`);
    }
}

class Wizard extends Player{
    constructor(name,type){
    super(name,type)
    }
    play(){
        console.log(`WEEEEEEEEEEEEEEE I am a ${this.type}`);
    }
}

const wiz1 = new Wizard("Sham","Badass");
const wiz2 = new Wizard("Shaun","Goodass");

// Exercise
//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4; //4


//#3 create two classes: an Animal class and a Mamal class.
class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    }
    sound(){
        console.log(`Moo I am ${this.name}, I am a ${this.type}, I am of ${this.color} color.`);
    }
}

// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
let cow = new Mammal('dolly','cow','Black');