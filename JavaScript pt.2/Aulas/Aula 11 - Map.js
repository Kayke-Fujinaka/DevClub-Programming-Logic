/*

    MAP
     - Cria um novo array, a partir do array percorrido (array original)
     - Cria um novo array com a mesma quantidade de itens do array original
     - Aceita 3 parâmetros:
        - Item do Array
        - Index
        - Array Completo

    O map serve para fazemos operação de transformação/alteração nos itens 
    de um array e ao final dessas operações ter uma lista nova com a mesma 
    quantidade de itens da lista base.

 */

const numbers = [1,2,3,4]
const students = [
    { name: "Ana Paula", age: 14 },
    { name: "Pedro", age: 17 },
    { name: "Lucas", age: 23 },
    { name: "Kristina", age: 19 },
]

// const newArray = numbers.map( (number) => {
//     return number * 2
// })

const newStudents = students.map( (student) =>{
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5,
        nacionality: "Brazil"
    }

    return newStudent
})

console.log(newStudents)