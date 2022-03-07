const myNumber = 10
const myString = "Oi, eu sou o String"
const MyObject = {
    name: "Object"
}

console.log(typeof myNumber)
console.log(typeof MyObject)
console.log(typeof myString)

// ----------------------------------------------------------

const MyFirstObject = {
    name: "Object",
    age: 21,
    height: 1.84
}

delete MyFirstObject.age

console.log(MyFirstObject)