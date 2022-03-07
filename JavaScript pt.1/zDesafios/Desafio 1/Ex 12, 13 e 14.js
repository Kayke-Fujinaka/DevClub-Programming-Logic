// [ ] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.

const number1 = Math.floor(Math.random() * 101)
const number2 = Math.floor(Math.random() * 10)

const result = Math.trunc(number1 / number2) 
const rest = number1 % number2

console.log(`O ${number1} dividido pelo ${number2} é igual a ${result} e o seu resto é ${rest}`)

// [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.
const number1 = Math.floor(Math.random() * 11)
const number2 = Math.floor(Math.random() * 11)

console.log(`Os números sortidos foram: O primeiro foi o ${number1} e o segundo o ${number2}`)

if (number1 > number2){
    console.log(`O número ${number1} é maior que o número ${number2}`)
} else {
    console.log(`O número ${number1} é menor que o número ${number2}`)
}



// [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.


