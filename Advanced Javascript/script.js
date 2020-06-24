// Switch

function move(params) {
    var what;
    switch(direction){
        case "forward" :
        what = "you enter a monster";
        break;
        case "back" :
        what = "you arrived home";
        break;
        case "right" :
        what = "you found a river";
        break;
        case "left" :
        what = "you run into a troll";
        break;
        default:
            what = "please a enter valid directions";
    }
    return what;
}

// Terenary operator

// condition ? exp1 : exp2 ;

// if condition true return exp1 else exp2.

// ES 5
// let , const

const player = "bobby"; //It creates a constant variable that cannot be changed.
let experience = 100;
let wizard = false;

if (experience>90){
    let wizard = true;
    console.log('inside', wizard);
}

console.log('outside', wizard);

// Destruturing
const obj = {
    player : 'bobbby' ,
    experience : 100 ,
    wizard : true
}
const player = obj.player;
const experience = obj.experience;
let wizard = obj.wizard;

// Now with destruturing
const {player, experience} = obj;
let {wizard} = obj;

// object properties
const name = "john snow";
const obj = {
    [name] : "hello",
    ['ray' + 'smith'] : "hihi"
}

// Template Strings

// Old way
const greeting = "hello" + name + "you seem to be doing good";

// New Way
const greeting = `Hello ${name} you seem to be doing good`;

// Defautl Arguments
function greet(name = 'laraib', age = 21){
    return `Hello ${name} you seem to be of ${age}`;
}

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('fooo');
let sym3 = Symbol('foo');

// arrow function
// old way
function add(a,b) {
    return a+b;
}

// new way
const add = (a,b) => a+b;

// Closures - a function ran. The function executed.
// It's never going to be executed but it's goingt to remember
// that there are refrences to those variables.

const first = () => {
    const greet = "hi";
    const second = () => {
    alert(greet);
    }
}

const new_func = first();
new_func();

// Currying
const multiply = (a,b) => a * b;
const curried_mulitply = (a) => (b) => a*b;

// compose
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum,sum)(5);

// Avoiding side Effects, and functional purity.

// Pass by value. Only the value is copied.
var a = 5;
var b = a;
a++;
// In this only the value is copied, they do not have any relation
// With each other.Only 'a' will increment, 'b' will remain the same.

// Pass by refrence.
let obj1 = {name: "yao", password : "123"};
let obj2 = obj1;

// In this the the reference to 'obj1' has been passed to
// 'obj2'. So when ever there are changes made to obj1.
// 'obj2' will also reflect those changes and vice-versa.

let c = [1,2,3,4];
let d = [].concat(c);
// Althought array has also the property of being passed by refrence.
// But with this concationation method we only pass the value
// not the refrence.

// Trying the same thing with objects;
// passing object by value.
let obj1 = {a:'a',b:'b',c:'c'};
let obj2 = Object.assign({},obj1);
