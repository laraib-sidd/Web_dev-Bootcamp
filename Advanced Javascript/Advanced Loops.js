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
// It works with objects;
for (item in bas){
    console.log(item);
}