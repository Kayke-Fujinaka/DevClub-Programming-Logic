/* 

[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 

*/



const hours = () => { 
    return console.log(new Date().toLocaleTimeString('pt-Br'))
}

hours()