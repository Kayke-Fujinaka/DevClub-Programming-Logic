// -------------- Exercício 1 -------------- 

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "Jão", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
]

const newList = list.map( client => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Camarote' : 'Pista'
    }
    return newList
})

console.log(newList)

// -------------- Exercício 2.1 -------------- 

const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "Jão", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
]

// Menos que 7, ele está reprovado

const newList1 = students.map( client => {
    const newList1 = {
        name: client.name,
        finalResult: client.testGrade >= 7 ? 'approved' : 'dispproved'
    }

    return newList1
})

console.log(newList1)

// --------------  Exercício 2.2 --------------  

const student = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "Jão", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
]

const approvedStudents = student.map( studen => {
    
    let approvedOrNot
    if(studen.testGrade >= 7){
        approvedOrNot = 'approved'
    } else {
        approvedOrNot = 'disapproved'
    }

    const student = {
        name: studen.name,
        finalResult: approvedOrNot
    }


    return student
})

console.log(approvedStudents)