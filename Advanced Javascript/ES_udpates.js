// ES7 updates:
// inclues method : Its a method that looks for a sbustring in
// a string and array.
"Hello".includes('H')//returns true.

const pets = ['cat','dohg','bat'];
pets.includes('cat') //returns true.

// exponenstial
const square = (x) => x**2;
const cube = (x) => x**3;
// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John'); //returns false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const check = dragons.filter(name => name.includes('John'));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const num_100 = (num) => num**100;


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
num_100(1000) //returns infinity.



// ES8:
// String padding : padStart(),padEnt()
"Hello".padStart(10);
// "     Hello"
// It just adds 10 white-spaces at the start.

const fun = (a,b,) => console.log(a);
fun(2,)
// syntax correction you can add comma at the end of parameters.

var obj = {
    username : 'Santa',
    username1 : 'Rudolf',
    username3 : 'mr.Grinch'
}
// old way
Object.keys(obj).forEach((key,index) =>{
    console.log(key,obj[key],index);
})

// new way
Object.values(obj).forEach(value => console.log(value));
// reutrns all the values of the object

Object.entries(obj).forEach(item => console.log(item));
// Returns all the items in the object.

Object.entries(obj).map(user => user[1] + user[0].replace('username',''));

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'


// when you do:
turtle.padStart(10);
rabbit.padStart(10);
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// trim() function removes any trailling whitespaces
// from the string, and the second parameter,
// instead of whitespaces adds the character to the string.


// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(item => `${item[0]} ${item[1]}`).join(' ');
// other way
Object.entries(obj).map(item => item.join(' ')).join(' ');

// ES10
const arr = [1,[2,3],4,5]
arr.flat();
// flat - this function makes a multidimensional array single
// dimensional.
// flat takes a parameter to define till how much depth to
// flaten.
// It also removes the empty entries in the array.
// flatmap()

const jurassic_park = arr.flatmap(num => num + 'a')
// flatmap - It flatens the array and also applies a map
// function to it.

// trimStart() - it removes the empty white spaces from the
// beginning of the string.
// trimEnd() - it removes the empty white spaces from the
// ending of the string.
// trim () = it removes empty white spaces from both
// the ends.

// fromEntries
user = [['commanderTom',24],['zeklander',43],['tracy',65]];
Object.fromEntries(user);
// It converts a two dimensional array into a object.

