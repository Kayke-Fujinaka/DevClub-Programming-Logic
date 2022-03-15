/*

[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 

- média do salário da população; 
- média do número de filhos; 
- maior salário; 
- O final da leitura de dados se dará com a entrada de um salário negativo. 
- Faça isso usando uma função!

*/

const object = [ // Criou um array com vários objetos

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

const averageAndHighestSalary = () => { // Criou uma função chamada averageAndHighestSalary

    //Aqui vai atribuir um valor para váriavel, ou seja, o valor do índice {a} vai valer 0 para que a o while comece do 0bjeto 0

    let sumOfSalary = 0
    let sumOfChildren = 0

    let averageOfSalary
    let averageOfChildren

    let highestNumber = 0

    let a = 0



    while (object[a].salary > 0) {

        for (i = a; i <= a; i++) {

            if (object[a].salary > highestNumber) { // Se o salário de cada objeto for maior que o maior número ele vai continuar.
                highestNumber = object[a].salary // O maior número vai atribuir o valor do item que o if e o índice está passando.

            }

            if (object[a].salary > 0) { // Se o valor do salário foi maior que 0, ele vai realizar a seguinte função:

                sumOfSalary = sumOfSalary + object[a].salary  // A soma do salário vai ir de uma forma crescente. 
                //Ele vai atribuindo um valor e somando com cada que vai passando.

            }

            if (object[a].children > 0) { // Se o valor dos filho foi maior que 0, ele vai realizar a seguinte função:
                sumOfChildren = sumOfChildren + object[a].children


            }
        }

        a++

    }
    
    averageOfSalary = Math.floor(sumOfSalary / (a))
    averageOfChildren = Math.floor(sumOfChildren / (a))

    return console.log(`A média salarial é ${averageOfSalary}\nA média de filhos é ${averageOfChildren}\nO maior salário entre os habitantes é ${highestNumber}`)

}

averageAndHighestSalary()


























