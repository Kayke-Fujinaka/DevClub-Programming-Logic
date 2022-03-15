const numbers = [1,2,3,4]
const students = [
    { name: "Ana Paula", age: 14 },
    { name: "Pedro", age: 17 },
    { name: "Lucas", age: 23 },
    { name: "Kristina", age: 19 },
]

// Três formas de escrever

//  1
const newArray0 = numbers.map( function(number) {
    return number * 3
})

// 2 
const newArray1 = numbers.map( (number) =>{
    return number * 3
})

// 3 (Quando tem só 1 parâmetro)
const newArray2 = numbers.map( number => number * 3)

// 4 (Quando tem mais de 1 parâmetro)
const newArray3 = numbers.map( (number,index) => number * 3)


// ----------------------------------------------------

const number = [1,2,3,4]
const student = [
    { name: "Ana Paula", age: 14 },
    { name: "Pedro", age: 17 },
    { name: "Lucas", age: 23 },
    { name: "Kristina", age: 19 },
]

const double = number => number * 2
const toReais = number => `R$ ${number.toFixed(2)}`

const newAr = number.map(double).map(toReais)

console.log(newAr)