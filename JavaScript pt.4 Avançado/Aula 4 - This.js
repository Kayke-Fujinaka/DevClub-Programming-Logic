/* 

THIS


Node - module.exports
Web - window

- Global
Quando ele está no Escopo Global no Node, ele faz referência ao module.exports;
Quando está na no Escopo Global na Web, ele faz referência ao window;

- Local
Se está no Escopo Local e tem algo acima dele, a coisa acima será apontando; 
Caso não tenha nada acima será apontado o Global.

*/

const person = {
    name: "Kayke",
    age: 17,
    talk: function() {
        console.log(this.age) // Local
    }
}

person.talk()

function teste() {
    console.log(this) // Global
}

teste()