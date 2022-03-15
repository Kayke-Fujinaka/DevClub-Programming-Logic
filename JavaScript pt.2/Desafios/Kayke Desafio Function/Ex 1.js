/* 

[ ] Escreva um programa onde, você chame uma função enviando um número, 
a função deve imprime na tela os número de 1 até o número que você enviou

*/

// ----------------------------------------------------- Exemplo 1

let a = 1
while (a <= 10) {
    console.log(`${a}`)  
    a++
}

// ----------------------------------------------------- Exemplo 2

const zero = ''.length
const um = ' '.length
const dez = `${um}${zero}`

for(let i = um; i <= dez; i += um) {
    console.log(i)
}

// ----------------------------------------------------- Exemplo 3

function myExample(number) {
    let numberDefinitive = 1

    while (numberDefinitive <= number) {
        console.log(numberDefinitive++)
    }
}

myExample(Math.ceil(Math.random() * (100 - 1)))

// ----------------------------------------------------- Exemplo 4

const myExample2 = numbers => {
    let numberDefinitive1 = 1

    while (numberDefinitive1 <= numbers) {
        console.log(numberDefinitive1++)
    }
}

myExample2(Math.ceil(Math.random() * (100 - 1)))
