require("colors");

const math = require('./modules/math.js') 

console.clear();
console.log(math);

const main = async() => {
    let a= (math.getRandomInt(10))
    let b= (math.getRandomInt(10))
    console.log("====================================".bgMagenta);
    console.log("==".bgMagenta + "      Numeros Random     ".blue +      "=========".bgMagenta);
    console.log("====================================\n".bgMagenta);
    console.log("====================================".bgCyan);
    console.log("numeros generados:"+" "+a+" "+b);
    console.log("====================================\n".bgCyan);
    console.log("====================================".bgCyan);
    console.log("==".bgCyan + "  Suma =>" + math.add(a,b) + "                      "+ "==".bgCyan);
    console.log("==".bgCyan + "  Resta =>"+math.substract(a,b) +"                    "+ "==".bgCyan);
    console.log("==".bgCyan + "  Multiplicacion =>"+math.multiply(a,b) + "           "+"==".bgCyan);
    console.log("==".bgCyan + "  divicion =>"+math.divide(a,b) + "                  "+"==".bgCyan);
    
    console.log("===================================".bgCyan);
    
}

main();