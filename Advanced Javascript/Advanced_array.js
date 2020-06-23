const arr = [1,2,3,4];
const double = [];

const new_array = arr.forEach((num) => {
    doubel.push(num*2);
})

// map : It always returns an operation.
const map_arr = arr.map(num => {
    return num * 5;
})
const map_array = arr.map(num => num * 2);

// filter : It does a condition check.
const filter_arr = arr.filter(num => {
    return num > 5;
})

const filter_array = arr.filter(num => num > 5);

// reduce

const reduce_array = arr.reduce((accumulator, num) => {
    return accumulator + num
}, 0)