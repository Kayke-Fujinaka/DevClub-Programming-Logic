class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    talk() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person ("Kayke", 17)
const newPerson1 = new Person ("Luiza", 37)
const newPerson2 = new Person ("Vagner", 72)

newPerson.talk()
newPerson1.talk()
newPerson2.talk()