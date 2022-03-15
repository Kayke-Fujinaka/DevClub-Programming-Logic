/* 


[ ] Escreva um programa onde, você cria uma função geradora de desconto. 

- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, 
um booleano que diz se é a primeira compra do cliente ou não, 
um booleando que diz se o cliente vai pagar a vista ou não)

*/

const discountGenerator = (customerName, totalPurchaseAmount, firstPurchase, payTheView) => {

    //Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 
    if (firstPurchase === true && payTheView === true && totalPurchaseAmount > 1000) {
        discount = 30
    }

    //Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto    
    else if (firstPurchase === true && payTheView === true && 500 <= totalPurchaseAmount && totalPurchaseAmount <= 1000) {
        discount = 25
    }

    //Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 
    else if (firstPurchase === true && payTheView === true && totalPurchaseAmount < 500) {
        discount = 20
    }

    //Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
    else if (firstPurchase === true && payTheView === false && totalPurchaseAmount > 1000) {
        discount = 20
    }

    //Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 
    else if (firstPurchase === true && payTheView === false && 500 <= totalPurchaseAmount && totalPurchaseAmount <= 1000) {
        discount = 15
    }

    //Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 
    else if (firstPurchase === true && payTheView === false && totalPurchaseAmount < 500) {
        discount = 10
    }

    //Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
    else if (firstPurchase === false && payTheView === true && totalPurchaseAmount > 1000) {
        discount = 20
    }

    //Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 
    else if (firstPurchase === false && payTheView === true && 500 <= totalPurchaseAmount && totalPurchaseAmount <= 1000) {
        discount = 15
    }

    //Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 
    else if (firstPurchase === false && payTheView === true && totalPurchaseAmount < 500) {
        discount = 10
    }

    //Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
    else if (firstPurchase === false && payTheView === false && totalPurchaseAmount > 1000) {
        discount = 10
    }

    //Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 
    else if (firstPurchase === false && payTheView === false && 500 <= totalPurchaseAmount && totalPurchaseAmount <= 1000) {
        discount = 5
    }

    //Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
    else if (firstPurchase === false && payTheView === false && totalPurchaseAmount < 1000) {
        discount = 0
    }

    let cupomDiscount = Math.floor(Math.random() * (20 - 10 + 1) + 10)

    /* 

    Se o cliente recebeu desconto: 
    - imprima na tela um agradecimento pela compra ;
    - o valor total sem desconto ;
    - o valor total com desconto;
    - a porcentagem de desconto que ele recebeu.   
    
    */

    /* 
    
   Se o cliente não recebeu desconto:
    - Imprima na tela um agradecimento pela compra;
    - O valor total da sua compra;
    - Um cupom de desconto que deve ser um valor aleatório entre 10 e 20% para a próxima compra.
    
    */


    if (discount > 0) {
        console.log(` Agradecemos pela sua compra, ${customerName}. \n O valor total da sua compra é R$${totalPurchaseAmount}, mas com o desconto de ${discount}% se torna ${totalPurchaseAmount = totalPurchaseAmount * (100 - discount) / 100}.`)
    } else {
        console.log(` Agradecemos pela sua compra, ${customerName}. \n O valor total da sua compra é R$${totalPurchaseAmount}, mas você recebeu um desconto para próxima compra de ${cupomDiscount}%.`)
    }

}

discountGenerator(`Elias Matuta`, 200, false, false)
