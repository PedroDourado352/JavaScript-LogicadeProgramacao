////Function declarations

function movie() {
    console.log('The matrix');
}

movie();

//Hoisting
//Function expression

const car = function() {
    console.log('Ferrari');
}

car();

const truck = car;

truck();

function price(a, b) {
    let total = 0;
    for (let value of arguments) 
        total += value;
    return total;
}

console.log(price(10, 20, 10, 20));




