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

const player = "bobby";
let experience = 100;
let wizard = false;

if (experience>90){
    let wizard = true;
    console.log('inside', wizard);
}

console.log('outside', wizard);