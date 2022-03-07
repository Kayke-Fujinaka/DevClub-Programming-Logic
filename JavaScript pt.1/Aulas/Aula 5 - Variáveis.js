var number1 = 1 // NÃO USAR O VAR // O igual do lado da variável serve para atribuir um valor
let number2 = 2 // Variável que precisa altera o valor
const number3 = 3 // Variável que vai possuir um valor constante

// Caso queira mudar o valor das varíaveis acima é só:
number1 = 10
number2 = 20
// number3 = 30 Apenas o const que não pode ser alterado

console.log(number1)
console.log(number2)
console.log(number3)

// É permitido:

// - Iniciar com $ ou _
// - Colocar acento
// - Iniciar com letras
// - Letras maiúsculas e minúsculas

// Não pode:

// - Começar com número
// - Colocar espaço

// Ideal:

// - Camel Case (Ele funciona como uma corcunda de um camelo graosDeArrozNoPrato, pois não pode utilizar o espaço)
// - Snake Case (Ele funciona com os underline graos_de_arroz_no_prato)
// - Sempre em inglês
// - Nomes com sentido