/* 

FOR EACH

ForEach percorre todos os itens de um array

Sempre que você for fazer um loop for, vale mais a pena usar um forEach, 
pois ele elimina a carga mental de ter que lidar com as variáveis de controle e 
por consequência pode ajudar a deixar o código mais fácil de ler, 
levando em conta que essa é uma forma super usada no mundo JavaScript em geral.

*/

const students = [
    { name: "Ana Paula", age: 14 },
    { name: "Pedro", age: 17 },
    { name: "Lucas", age: 23 },
    { name: "Kristina", age: 19 },
    { name: "Júlia", age: 4 },
    { name: "Fábio", age: 34 },
    { name: "Cauê", age: 12 },
    { name: "Luciane", age: 42 },
    { name: "Josias", age: 58 },
    { name: "Isabella", age: 16 },
    { name: "Maria", age: 83 },
    { name: "Márcio", age: 75 },
    { name: "Gabriela", age: 2 },
    { name: "Isaac", age: 8 },
    { name: "José", age: 44 },
    { name: "Beatriz", age: 26 },
    { name: "Merlinda", age: 74 },
];

students.forEach( (student,index, array) => { //Caso coloque o Index, ele mostra em qual posição do Array está.
    console.log(array) // Caso coloque Array, ele vai mostrar tanto de vezes que ele percorre
})

// --------------------------------------- Situação Real ---------------------------------------

/* 

Temos um banco de dados com algumas informações. 
O departamente disse para os programadores fazer campanhas e entender sobre a idade do público em média.
- Precisam achar a média de idade;
- Usar o forEach para ajudar a achar a idade média;

*/

const dados = [
    { name: "Ana Paula", age: 14 },
    { name: "Pedro", age: 17 },
    { name: "Lucas", age: 23 },
    { name: "Kristina", age: 19 },
    { name: "Júlia", age: 4 },
    { name: "Fábio", age: 34 },
    { name: "Cauê", age: 12 },
    { name: "Luciane", age: 42 },
    { name: "Josias", age: 58 },
    { name: "Isabella", age: 16 },
    { name: "Maria", age: 83 },
    { name: "Márcio", age: 75 },
    { name: "Gabriela", age: 2 },
    { name: "Isaac", age: 8 },
    { name: "José", age: 44 },
    { name: "Beatriz", age: 26 },
    { name: "Merlinda", age: 74 },
];

let allDadosAge = 0

dados.forEach( (dados,index) => {
    allDadosAge += dados.age
    console.log(`O aluno se chama ${dados.name}, tem ${dados.age} anos e está na posição ${index}`)
})

const averageAge = allDadosAge / dados.length

console.log(`A média de idade do pessoal é de ${averageAge.toFixed(2)}`)

