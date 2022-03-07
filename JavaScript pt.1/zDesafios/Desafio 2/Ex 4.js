/* 


[ ] Façsa um programa onde leia um número e diga se ele é: 
- ímpar 
- par 
- é um número primo e impar 
- é par e divisível por 5.


*/

const number = Math.floor(Math.random() * 12)
let divisor = 0

if (number % 2 == 0 && number % 5 == 0) {
    console.log(`O número ${number} é par e também é divisível por 5`)
} else if (number % 2 == 0 && number % 5 != 0) {
    console.log(`O número ${number} é par e não é divisível por 5`)
} else if (number % 2 != 0 && number % 5 == 0) {
    console.log(`O número ${number} é ímpar e também é divisível por 5`)
} else {
    console.log(`O número ${number} é ímpar e não é divisível por 5`)
}

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        divisor++
    }   
} 

if (divisor == 2) {
    console.log("É primo")
} else {
    console.log("Nâo é primo")
}

