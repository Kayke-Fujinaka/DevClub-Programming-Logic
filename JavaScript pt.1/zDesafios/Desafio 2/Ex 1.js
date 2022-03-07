// [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"
const number1 = Math.floor(Math.random() * 21)

console.log(`O número sortido foi ${number1}`)

if (number1 > 10){
    console.log(`O número ${number1} é maior que 10`)
} else if (number1 == 10){
    console.log(`O número ${number1} é igual a 10`)
} else {
    console.log(`O número ${number1} é menor que 10`)
}