/* 

FILTER 
  - Cria um novo array, a partir do array percorrido (array original)
  - Cria um novo array APENAS com os elementos filtrados
  - Aceita 3 parâmetros
      - item do array
      - Index
      - array completo

O método filter() cria um novo array com todos os elementos que 
passaram no teste implementado pela função fornecida.

*/

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "Jão", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
]

const justVips = list.filter( client => {
    return client.vip
})

console.log(justVips)


// -------------------------------------------


const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "Jão", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
    { name: "Taldo", testGrade: 8 },
]

const newStudentList = students.filter( student => {
    return student.testGrade >= 7
})

console.log(newStudentList)