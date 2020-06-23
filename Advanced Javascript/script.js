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