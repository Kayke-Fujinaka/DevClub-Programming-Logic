/* 

[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

*/

// ----------------------------------------------------- Exemplo 1

function a(number1, number2) {
    console.log(`Os números em ordem selecionados foram: o ${number1} e o ${number2}`)
    if (number1 > number2) {
        console.log(`O ${number1} é maior que o ${number2}`)
    } else if (number1 == number2) {
        console.log(`O ${number1} é igual ao ${number2}`)
    } else {
        console.log(`O ${number2} é maior que o ${number1}`)
    }
}

a(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))

// ----------------------------------------------------- Exemplo 2

function b(numberOne, numberTwo) {
    let hignNumber = 0

    if (numberOne > numberTwo) {
        hignNumber = numberOne
    } else if (numberOne == numberTwo) {
        console.log("Os números são iguais")
    } else {
        hignNumber = numberTwo
    }

    return hignNumber
}

const numbersOne = Math.ceil(Math.random() * 10) 
const numbersTwo = Math.ceil(Math.random() * 10)

console.log(`Os números sorteados foram: o ${numbersOne} e o ${numbersTwo}`)
console.log(`O maior número é ${b(numbersOne, numbersTwo)}`)