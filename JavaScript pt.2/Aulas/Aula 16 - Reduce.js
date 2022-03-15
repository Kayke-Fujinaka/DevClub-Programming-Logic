/* 

REDUCE
    - Retorna um valor (pode ser um novo array, um objeto, string, number, etc)
    - Aceita 4 parâmetros
        - Acumulador
        - Valor Atual
        - Index
        - Array Completo

*/

// Jeito 1

const list = [1,2,3,4];

const sum = list.reduce( (acc, current) => {
    return acc + current
}, 0)

console.log(sum)

// Jeito 2

const lists = [1,2,3,4];

const sums = lists.reduce( (acc, current) => acc + current, 0)

console.log(sums)

// Jeito 3

const listss = [1,2,3,4];
const myReduce = (acc,current) => acc + current
const sumss = listss.reduce( myReduce, 0)

console.log(sumss)


// ------------------------------------------------------------------------------------------------------------------------------------------


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsof', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976},
]