/* 

[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 
2 números, e a função responde qual número é maior

*/

const comparation = (numberOne, numberTwo) => {

    console.log(`Os números foram: ${numberOne} e ${numberTwo}`)

    if (numberOne > numberTwo) console.log(`O número ${numberOne} é maior que o ${numberTwo}`)
    else if (numberOne == numberTwo) console.log(`O número ${numberOne} e o número ${numberTwo} são iguais`)
    else console.log(`O número ${numberOne} é menor que o ${numberTwo}`)

}

comparation(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100))