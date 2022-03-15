
//  Jeito 1


const list = [20,3,234,12,17,541,6,87,275,1000] // APENAS números pares e divisíveis por 5

const newNumberList = list.filter( number => {
    if(number % 2 !== 0) return false
    if(number % 5 !== 0) return false

    return number
})

console.log(newNumberList)

//  Jeito 2

const lists = [20,3,234,12,17,541,6,87,275,1000] // APENAS números pares e divisíveis por 5

const newNumberLists = lists.filter( number => {
    if(number % 2 === 0 && number % 5 === 0) return true
   else return false
})

console.log(newNumberLists)

//  Jeito 3

const listss = [20,3,234,12,17,541,6,87,275,1000] // APENAS números pares e divisíveis por 5

const newNumberListss = listss.filter( number => {
    if(number % 2 !== 0 || number % 5 !== 0) return false
    else return true
})

console.log(newNumberListss)

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsof', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976},
] // Empresas fundadas depois de 1975 e que tenha mais de 2 milhoes de dolares de valor de mercado

const newCompanies = companies.filter(company => {
    if(company.foundedOn <= 1975) return false
    if(company.marketValue <= 200) return false

    return true
})

console.log(newCompanies)