// [X] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

const myNumber = 10

if (myNumber > 10) {
    console.log("Maior que 10")
} else if (myNumber < 10) {
    console.log("Menor que 10")
} else {
    console.log("Igual a 10")
}

// [X] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const person = {
    name: "Kayke",
    nacionality: "brasileiro"
}

if (person.nacionality == 'brasileiro') {
    console.log("A pessoa é brasileira")
} else {
    console.log("A pessoa não é brasileira")
}


// [X] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
// Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, 
//se não ganhou, mostra outra mensagem.

const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
const winningRandomNumber = Math.floor(Math.random() * (10 - 1) + 1)

console.log(randomNumber)
console.log(winningRandomNumber)

if (randomNumber == winningRandomNumber) {
    console.log("Você ganhou um Iphone 13")
} else {
    console.log("Você não ganhou o sorteio")
}

// [X] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const numbers = [10, 6, 2]
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`O menor número é ${min} e o menor número é ${max}`)

// [X] Crie 5 objetos nesse formato
// // { 
// nome: "" 
// idade:"" 
// sexo:"" 
// profissão: "" 
// nacionalidade:"" 
// }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const object = [
    {
        name: "Kayke",
        age: 17,
        nacionality: "brasileiro",
        genre: "male",
        occupation: "student"
    },

    {
        name: "Hernandes",
        age: 57,
        nacionality: "argentino",
        genre: "male",
        occupation: "policial"
    },

    {
        name: "Johnny Joestar",
        age: 19,
        nacionality: "britânico",
        genre: "male",
        occupation: "joquei"
    },

    {
        name: "Pedro",
        age: 24,
        nacionality: "brasileiro",
        genre: "male",
        occupation: "developer"
    },

    {
        name: "Maju",
        age: 29,
        nacionality: "brasileiro",
        genre: "female",
        occupation: "student"
    },
]

for (let i = 0; i < object.length; i++) {
    if (object[i].age > 18 && object[i].nacionality === "brasileiro") {
        console.log(`As pessoas que passaram foram: ${object[i].name}`)
    } else {
        console.log(`Ninguém passou`)
    }
}

// [X] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10.
//Cada nota deve conter uma mensagem diferente.

const stars = 14

switch (stars) {
    case -1:
        console.log("Pior que Biscate")
        break;

    case 0:
        console.log("Isso nem pode ser chamado de comida")
        break;

    case 1:
        console.log("Última coisa da terra")
        break;

    case 2:
        console.log("Comeria na guerra")
        break;

    case 3:
        console.log("Última coisa da casa/morrendo de fome")
        break;

    case 4:
        console.log("Comeria por educação")
        break;

    case 5:
        console.log("Comeria uma vez por mês")
        break;

    case 6:
        console.log("Comeria as vezes")
        break;

    case 7:
        console.log("Comeria como refeição normal")
        break;

    case 8:
        console.log("Comeria sempre que desse")
        break;

    case 9:
        console.log("Compraria para comer")
        break;

    case 10:
        console.log("Comeria todos os dia")
        break;

    case 11:
        console.log("Minha refeição pelo resto da vida")
        break;

    case 12:
        console.log("Melhor comida que já comi")
        break;

    case 13:
        console.log("A comida feita pelos deuses.")
        break;

    case 14:
        console.log("A comida que fez minhas papilas de gustativas ir ao um estágio celestial")
        break;

    case 'Geleia':
        console.log("Nível Geleia")
        break;

    default:
        break;
}

// [X] Faça um programa onde leia um numero e diga se ele é par ou impar.

const numero = 11
if(numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar")
}

// [X] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const number = 10

    if (number % 2 === 0) {

        if (number % 5 === 0) console.log("O número é par e divisível por 5")
        else console.log("O número é par, mas não é divisível por 5")
            
    } else {

        for (let i = 2; i < number; i++) 
            if (number % i === 0) {
                console.log("Ele não é um número primo, porém é impar")
                break
            } else {
                if (i === number -1) console.log("O número é primo")
            }
    
    }

// [X] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
// - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - T

const numberOne = 123
const numberTwo = 28
const numberThree = 21
const numberFour = 166

if(numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0){
    console.log("Todos os números são Pares")
} else if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0){
    console.log("Todos os números são Ímpares")
} else {
    console.log("Os números estão misturados entre pares e ímpares")
}