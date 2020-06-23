// change everything below to the newer Javascript!

// let + const
const a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const {firstName,lastName,age,eyeColor} = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

const okObj = {
    a,
    b,
    c
}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

let message = `Hello ${person.firstName} have i met you before?`

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("This is my first symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username,location) => {
    if (username && location){
        return "I am not lost";
    }
    else{
        return "I am totally lost";
    }
}

// Arrow and terenary method.
const whereAmI = (username,location) => username&&location ? "I am not lost" : "I am totally lost";