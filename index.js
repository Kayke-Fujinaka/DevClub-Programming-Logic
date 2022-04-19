/* 

Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual

*/

const info = [
    {
        name: "Kayke",
        nacionalidade: "brasileiro"
    },
    {
        name: "Pedro",
        nacionalidade: "americano"
    }
]

const teste = (info) => {

    for (let i = 0; i <= info.; i++){
        if(info.nacionalidade == "brasileiro"){
            console.log(`${info.name} É brasileiro`)
        } else {
            console.log(`${info.name} não é brasileiro`)
        }
    }

}

teste()