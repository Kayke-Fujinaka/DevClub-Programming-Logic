// [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const number = Math.floor(Math.random() * 11)
const numberWinning = Math.floor(Math.random() * 11)
console.log(`O número sorteado foi... ${numberWinning}!!!`)

if (number == numberWinning){
    console.log(`Você tirou o número ${number}. Você conseguiu ganhar o prêmio de 10 milhos! Meus parabéns!!! `)
} else {
    console.log(`Você tirou o número ${number} e infelizmente não foi dessa vez`)
}