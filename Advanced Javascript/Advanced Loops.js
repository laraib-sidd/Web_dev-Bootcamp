const basket = ['apples','oranges','grapes'];
const bas = {
    apples :4,
    oragnes : 3,
    grapes : 4
}

// (1) for
for (let i =0;i<basket.length;i++){
    console.log(basket[i]);
}

// 2 foreach
basket.forEach(item => console.log(item));

// 3 for of
// iterables - arrays, strings;
for (item of basket){
    console.log(item);
}

// 4 for in
// It allows us to see object properties.
// We are doing here enumerating.
// It works with objects;
for (item in bas){
    console.log(item);
}

// Exercise

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let max = 0;
    for (let i=0;i<arr.length;i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

function biggestNumberInArray2(arr) {
    let max = 0;
    arr.forEach(num =>{
        if (num > max){
            max = num;
        }
    })
    return max;
}

function biggestNumberInArray3(arr) {
    let max = 0;
    for (item of arr){
        if (num > max){
            max = num;
        }
    }
    return max;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket){
        if (item === lookingFor){
            return `${lookingFor} is not in the basket.`;
        }
    }
    return 'The item was not found in the basket.';
}
// How does javascript works?
// Memeory heap - It allocates the memory for the variables that are declared.
// Call Stack - It stores all the commands that are need to be executed.

// Javascript is a single threaded language that can be non-blocking?
// Single threaded means it has only one call stack, and it can run only
// one thread at a time.

// Synchronous Programming -Synchronous basically means that you can only execute one thing at a time.
// Asynchronous means that you can execute multiple things at a time and you don't have to finish
// executing the current thing in order to move on to next one.