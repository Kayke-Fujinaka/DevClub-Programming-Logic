/* 

[ ] Escreva um programa onde, você chame uma função enviando um número 
(aceitar somente valores entre 1 e 10) 
e escrever a tabuada de 1 a 10 do valor lido.

*/

// ----------------------------------------------------- Exemplo 1

const number = Math.ceil(Math.random() * 10)

for (let index = 1; index <= 10; index++) {

    console.log(`${number} x ${index} = ${number * index}`)

}

// ----------------------------------------------------- Exemplo 2

function myExample(numbers) {

    if (numbers <= 10) {
        for (let index = 1; index <= 10; index++) {

            console.log(`${numbers} x ${index} = ${numbers * index}`)

        }
    } else {
        console.log("Não foi possível calcular")
    }
}

myExample(Math.ceil(Math.random() * 20))

// ----------------------------------------------------- Exemplo 3

const myExample = numbers => {

    if (numbers <= 10) {
        for (let index = 1; index <= 10; index++) {

            console.log(`${numbers} x ${index} = ${numbers * index}`)

        }
    } else {
        console.log("Não foi possível calcular, pois o número a ser multiplicado foi maior que 10.")
    }
}

myExample(Math.ceil(Math.random() * 11))

// ----------------------------------------------------- Exemplo 4

function multiplicationTable(a, b){
    for (let i = 1; i <= b; i++) {
        console.log(`${a} x ${i} = ${a * i}`)
    }
}

multiplicationTable(2, 10)








