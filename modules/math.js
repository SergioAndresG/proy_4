const Maths = {} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function add(a,b) {
    return a + b
}


function substract(a,b) {
    return a - b
}


function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    if (b == 0) {
        return "No se puede dividir entre cero"
    } 
    else if (a==0 && b == 0) {
        return "No se puede dividir entre cero"
    } 
    else {
        return a / b;
    }
}

Maths.add = add;
Maths.substract = substract;
Maths.multiply = multiply;
Maths.divide = divide;
Maths.getRandomInt = getRandomInt

module.exports = Maths;