/* 

getElementByTagName()

O método getElementsByTagName da interface Document retorna um HTMLCollection de elementos com o nome da tag fornecido.

Exemplo:
Para buscar todas as tags span de um documento escrevemos:
var spans = document.getElementsByTagName('span');

*/

const element = document.getElementsByTagName("p")

console.log(element)