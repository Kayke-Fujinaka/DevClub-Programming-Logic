


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsof', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976},
]

// 10% no valor de mercado de todas as empresas

const newValues = companies.map( (companie) => {
    const newValue = {
        name: companie.name,
        marketValue: (companie.marketValue * 1.1).toFixed(1),
        CEO: companie.CEO,
        foundedOn: companie.foundedOn,
    }
    return newValue
}) 

console.log(newValues)

// Filtra as empresas que foram fundadas antes dos anos 2000


const oldCompanieList = (business) => {
    business.filter(company => {
        if(company.foundedOn >= 2000) return false
        const empresa = `${company.name} - ${company.foundedOn}`
        console.log(empresa)
        return 
    })
}

oldCompanieList(companies)

// Soma do valor das empresas antes dos anos 2000

const allMarketValue = companies.reduce( ((acc, current) => acc + current.marketValue), 0)

console.log(allMarketValue)