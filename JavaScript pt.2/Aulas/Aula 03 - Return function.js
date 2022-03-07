// A declaração return finaliza a execução de uma função e especifica os valores que 
// devem ser retonados para onde a função foi chamada.

// return [[expression]]; 

function add(number1, number2){ // Void = vazio, pois ele não retorna
    console.log(number1 + number2)
}

const myNumberOne = 284
const myNumberTwo = 741

console.log(`O primeiro número é ${myNumberOne}`)
console.log(`O segundo número é ${myNumberTwo}`)
console.log(`A soma dos dois número é ${add(myNumberOne, myNumberTwo)}`)

// --------------------------------------------------------------------------

function add(number1, number2){
    const result = number1 + number2
    return result // ou só pode colocar: return number1 + number2
}

const myNumberOne = 284
const myNumberTwo = 741

console.log(`O primeiro número é ${myNumberOne}`)
console.log(`O segundo número é ${myNumberTwo}`)
console.log(`A soma dos dois número é ${add(myNumberOne, myNumberTwo)}`)


