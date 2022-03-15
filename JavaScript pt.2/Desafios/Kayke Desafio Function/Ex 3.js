/*

[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 

*/

// ----------------------------------------------------- Exemplo 1

const time = () => {
    let data = new Date()
    h = data.getHours()
    m = data.getMinutes()
    s = data.getSeconds()
    console.log(`São: ${h}:${m}:${s}`)
}

time()


// ----------------------------------------------------- Exemplo 2

function time() {
    let data = new Date()
    h = data.getHours()
    m = data.getMinutes()
    s = data.getSeconds()
    console.log(`São: ${h}:${m}:${s}`)
}

time()

// ----------------------------------------------------- Exemplo 3 (Sem função)

    let data = new Date()
    h = data.getHours()
    m = data.getMinutes()
    s = data.getSeconds()
    const time = `São ${h}:${m}:${s}`
    console.log(time)


