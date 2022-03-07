/*

[ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

- Você deve enviar como argumentos da função 
- Valor inicial investido 
- Valor atual do investimento 
- Tempo em meses, que o valor está investido

- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. 
Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo

*/

// ----------------------------------------------------- Exemplo 1

function calcularTaxaDeMensal(valorInicial, valorAtual, tempoMeses){


    let calcularTaxaDeMensal = (valorAtual - valorInicial) / (valorInicial * tempoMeses) * 100

    return console.log(`A taxa mensal de juros do investimento é: ${calcularTaxaDeMensal}%`);
}

calcularTaxaDeMensal(2000, 2600, 12)

// ----------------------------------------------------- Exemplo 2

const interestCalculate = (valueInitial, currentValueInvestment, timeInMonth) => {
    let rate
    let fees = currentValueInvestment - valueInitial

    rate = (fees / (valueInitial * timeInMonth)) * 100

    return (console.log(`Taxa de juros mensal: ${rate}%`))
}


interestCalculate(2000, 2600, 12)