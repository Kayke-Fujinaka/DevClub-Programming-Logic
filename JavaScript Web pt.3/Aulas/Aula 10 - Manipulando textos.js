/*

O innerText, o innerHTML e o textContent são meios para manipular um texto.

innerText -> Ele altera o conteúdo de um elemento de sua página (DOM) com o conteúdo tratado apenas como texto.

innerHtml -> Ele altera o conteúdo de um elemento com o conteúdo tratado como HTML.

textContent -> Retorna o text COM formatações, mas sem os elementos html

O textContent e o innerText só consegue alterar o texto. Já o innerHTML ele permite adicionar HTML, como, por exemplo, um paragráfo, um span, etc... 

*/ 


const element = document.querySelector("h2")

element.innerHTML = "Aooooo da roça <p>Opa</p>"