const a = 4;
const b = 5;
const script = require('./second');
const c = require('fs');
const d = require('http');

setTimeout(() =>{
    console.log(a + b);
},30);

// To get the present working direcetory
console.log(__dirname);

// Exporting
console.log(script.large)

// Built in modules
// console.log(c);
console.log('fd')
