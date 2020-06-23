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
