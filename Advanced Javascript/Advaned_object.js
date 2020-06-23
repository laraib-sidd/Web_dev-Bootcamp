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