//Funções Anônimas: Uma função anônima é uma função sem nome. 


// ----- Primeira forma -----

function add(number1, number2){
    const result = number1 + number2
    return result 
}

const myNumberOne = 284
const myNumberTwo = 741

console.log(`O primeiro número é ${myNumberOne}`)
console.log(`O segundo número é ${myNumberTwo}`)

const result = add(myNumberOne, myNumberTwo)

console.log(`A soma dos dois número é ${result}`)

// ----- Segunda forma -----

const add = function (number1, number2){
    const result = number1 + number2
    return result 
}

const myNumberOne = 284
const myNumberTwo = 741

console.log(`O primeiro número é ${myNumberOne}`)
console.log(`O segundo número é ${myNumberTwo}`)

const result = add(myNumberOne, myNumberTwo)

console.log(`A soma dos dois número é ${result}`)

// ----- Terceira forma -----

(function() {

    console.log("Life");

})();