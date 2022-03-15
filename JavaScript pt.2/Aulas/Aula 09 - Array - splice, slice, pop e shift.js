

// Splice (unir / ligar)

// Permite que tire ou coloque itens no local que desejamos
//splice: sstudents.splice (indiceInicial, quantosItensVaoSerRetirados,itemAdicionado)

const students = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

students.splice(3,1,'Cazé') 


console.log(students)

// ---------------------------------------------------------------

// Slice (Fatiar)

//Cria um novo Array que necessita ser armazenado em uma variável;
//const newStudents = student.slice(indiceInicial, indiceFinal)

const studentss = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

const newStudents = studentss.slice(2, 4)

console.log(studentss, newStudents)

// ---------------------------------------------------------------

// POP

// Ele tira o último item do Array

const list = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

list.pop()

console.log(list)

// ---------------------------------------------------------------

//Shift

// Ele tira o primeiro item do Array

const lists = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

lists.shift()

console.log(lists)