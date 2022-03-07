const add = (number1, number2) => number1 + number2

const myNumberOne = 284
const myNumberTwo = 741

console.log(`O primeiro número é ${myNumberOne}`)
console.log(`O segundo número é ${myNumberTwo}`)

const result = add(myNumberOne, myNumberTwo)

console.log(`A soma dos dois número é ${result}`)

//Quando tiver um código maior
const add = (number1, number2) => {
    return number1 + number2 // Quando coloca a chave necessita colocar o retunr
}
const myNumberOne = 284
const myNumberTwo = 741

console.log(`O primeiro número é ${myNumberOne}`)
console.log(`O segundo número é ${myNumberTwo}`)

const result = add(myNumberOne, myNumberTwo)

console.log(`A soma dos dois número é ${result}`)