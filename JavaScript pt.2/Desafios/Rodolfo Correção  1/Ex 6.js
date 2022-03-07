/* 

[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 

- média do salário da população; 
- média do número de filhos; 
- maior salário; 
- O final da leitura de dados se dará com a entrada de um salário negativo. 
- Faça isso usando uma função!

*/

const object = [ 

    {
        name: "Kayke Fujinaka",
        age: 17,
        salary: 750,
        children: 2,
    },

    {
        name: "Matheus Santos",
        age: 21,
        salary: 1600,
        children: 2,
    },

    {
        name: "Rafael Yokoyama",
        age: 18,
        salary: 2540,
        children: 2,
    },

    {
        name: "Ismael Gomes",
        age: 21,
        salary: 2110,
        children: 2,
    },

    {
        name: "Pedro Henrique",
        age: 24,
        salary: -2200,
        children: 3,
    },

    {
        name: "Maju Fiorin",
        age: 29,
        salary: 1860,
        children: 8,
    },

    {
        name: "Rodolfo Mori",
        age: 39,
        salary: 21470,
        children: 0,
    },

    {
        name: "Felipe Bastos",
        age: 14,
        salary: 430,
        children: 2,
    },

    {
        name: "Gleysi Ferreira",
        age: 28,
        salary: 2190,
        children: 1,
    },

    {
        name: "Andressa Leles",
        age: 25,
        salary: 2453,
        children: 2,
    },

    {
        name: "Camilaaaa",
        age: 14,
        salary: 130,
        children: 1,
    },

    {
        name: "Marcos Henrique",
        age: 17,
        salary: 864,
        children: 2,
    },

    {
        name: "Cícero Lima",
        age: 43,
        salary: 1506,
        children: 3,
    },

    {
        name: "Raul",
        age: 19,
        salary: 956,
        children: 1
    },

    {
        name: "Danyel Sena",
        age: 19,
        salary: 18956,
        children: 2
    }

]

function Papari(information) {

    let averageOfSalary = 0
    let averageOfChildren = 0
    let highestSalary = 0

    for (let i = 0; i <= information.length; i++) {
        
        const salary = information[i].salary
        const children = information[i].children

        if(salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log(`Média de salário ${(averageOfSalary / i)}`)
            console.log(`Média de filhos ${(averageOfChildren / i)} `)
            console.log(`O maior salário é ${highestSalary}`)
            break
        } else {
            averageOfSalary += salary
            averageOfChildren += children
        }
        
    }

}

Papari(object)