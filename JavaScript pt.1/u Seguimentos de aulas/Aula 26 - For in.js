const student = {
    name: 'Caio',
    age: 25,
    genre: 'male'
}

//---------------------------------

console.log(student.name)

//---------------------------------

console.log(student["name"])

//---------------------------------

for (let property in student) {
    console.log(property)
}

//---------------------------------

for (let property in student) {
    console.log(student[property])
}

//---------------------------------

for (let property in student) {
    console.log(`${property} : ${student[property]}`)
}
