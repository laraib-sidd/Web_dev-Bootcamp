var css = document.querySelector('h3');
var color1 = document.getElementById('1');
var color2 = document.getElementById('2');
var body = document.getElementById('gradient');

console.log(css);
console.log(color1);
console.log(color2);

function col(){
    body.style.background =
        "linear-gradient(to right, " + color1.value
        + "," + color2.value + ")";
}

color1.addEventListener('input',col)

color2.addEventListener('input',col)



