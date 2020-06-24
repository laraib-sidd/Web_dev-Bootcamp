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