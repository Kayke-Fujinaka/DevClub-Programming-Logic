// [x] Faça um programa que SOME 2 números
const numberOne = 254 // Number
const numberTwo = 642
const result = numberOne + numberTwo
console.log(result)


// [x] Faça um programa que multiplique 2 números e o resultado adicione 10
const numberOne = 254 // Number
const numberTwo = 642
const result = numberOne + numberTwo + 10
console.log(result)

// [x] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33
console.log(Math.sqrt(625,2) * 10 / 33) //Math.sqrt

// [x] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
let name = "Kayke"
let partner = "Matheus"
let myTextWithString = `Olá, meu nome é ${name} e meu partner do CodeClub é o ${partner}`
console.log(myTextWithString)

// [x] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false.
let nameOne = "João"
let nameThree = "Maria"
let compare = nameOne == nameOne

console.log(compare)

let nameOne = "João"
let nameThree = "Maria"
let compare = nameOne == nameThree

console.log(compare)

// [x] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.
let nameOne = "João"
let nameThree = "Maria"
let compare = nameOne !== nameOne

console.log(compare)

let nameOne = "João"
let nameThree = "Maria"
let compare = nameOne !== nameThree

console.log(compare)

// [x] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.
const name = ["João", "Maria"]
const compare = name[0] == name[1]
console.log(compare)

const name = ["João", "Maria"]
const compare = name[0] == name[0]
console.log(compare)

// [x] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.
const name = ["João", "Maria"]
const compare = name[0] !== name[1]
console.log(compare)

const name = ["João", "Maria"]
const compare = name[0] !== name[0]
console.log(compare)

// [x] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.
const luis = {
    relationship: "Friend",
    age: 19,
    sex: "male"
}

const matheus = {
    relationship: "Friend",
    age: 21,
    sex: "male"
}

const pedro = {
    relationship: "Friend",
    age: 24,
    sex: "male"
}

const igor = {
    relationship: "Friend",
    age: 18,
    sex: "male"
}

const marcos = {
    relationship: "Friend",
    age: 17,
    sex: "male"
}

// [x] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const object1 = {
    name: "João"
}

const object2 = {
    name: "Maria"
}

console.log(object1.name == object2.name)

// [x] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100. 
console.log(Math.floor(Math.random() * (100 - 1) + 1))

// [x] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.
const numberOne = 7
const numberTwo = 3
const result = numberOne % numberTwo

console.log(result)

// [x] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.
const numberOne = 7
const numberTwo = 32
const result = numberOne > numberTwo

console.log(result)

// [x] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
const numberOne = 7
const numberTwo = 32
const result = numberOne < numberTwo

console.log(result)

// [x] Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3
const array = ["banana", {name: "Maça"}, "laranja", "Maça", 5, "Maça", "laranja", "Maça", "laranja", 222, "laranja", "Maça", "laranja"]

console.log(array.length)