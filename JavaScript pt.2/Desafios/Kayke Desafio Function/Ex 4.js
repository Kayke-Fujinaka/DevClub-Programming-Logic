/*

[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

*/

// ----------------------------------------------------- Exemplo 1

function Years() {
    let data = new Date()
    y = data.getFullYear()

    
    return y
}

console.log(`Estamos no ano de ${Years()}`)

// ----------------------------------------------------- Exemplo 2

const Anos = () => {
    let ano = new Date()
    x = ano.getFullYear()

    console.log(`Estamos no ano de ${x}`)
}

Anos()
