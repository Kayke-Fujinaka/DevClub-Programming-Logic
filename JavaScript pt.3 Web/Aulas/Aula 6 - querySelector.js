/*

O querySelector() traz apenas u melemento, ou seja, o primeiro elemento que ele encontrar (element)

Eu fiquei em dúvida de quando utlizar o querySelector e o getElementById, porém consegui achar um site que sanou minha dúvida.

Bem o primeiro ponto que podemos apontar é que o getElementById é muito mais rápido em relação a performance do que o querySelector.
Um ponto para o querySelector  é que ele consegue retornar classe e também usar seletores CSS, ou seja, 
ele irá pegar apenas o primeiro element que for encontrado, então se no caso o primeiro elemento tiver uma seleção avançada com uma cor, font. 
A opção mais útil será o querySelector por conta dos seletores CSS.

Recomendo muito esse site sobre a diferença entre os dois: 
https://pt.stackoverflow.com/questions/339172/quando-utilizar-queryselector-ao-invés-de-getelementbyid

Caso não saiba o que são Seletores CSS. Recomendo esse site: https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Selectors

*/

const element = document.querySelector("p")

console.log(element)