

// --- Push ---

const students = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

students.push('Kayke') // O .push ele serve para adicionar novos itens no Array. 
students.push('Kaue') // Pode usar quantas vezes quiser.
console.log(students)

// --- Length ---

const student = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

console.log(student.length) // Ele da o número exato de itens dentro do Array

// --- Sort ---

const list = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

console.log(list.sort()) // Ele organiza em ordem alfabética

// --- Delete ---

const lists = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

delete lists[0] // Ele deleta um item do Array

console.log(lists)

// --- Teste ---

const studentss = ['Val', 'Teu', 'Jão', 'Zé', 'Bia', 'Mauro']

studentss.push('Lucas', 'Leandro', 'Alberto')

delete studentss[5]

console.log(studentss.sort())

