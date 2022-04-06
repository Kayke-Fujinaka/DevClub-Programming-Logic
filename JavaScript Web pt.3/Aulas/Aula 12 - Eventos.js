/*

onBlur - remove o foco do elemento
onChange - muda o valor do elemento
onClick - o elemento é clicado pelo usuário
onFocus - o elemento é focado
onKeyPress - o usuário pressiona uma tecla sobre o elemento
onLoad - carrega o elemento por completo
onMouseOver - define ação quando o usuário passa o mouse sobre o elemento
onMouseOut - define ação quando o usuário retira o mouse sobre o elemento
onSubmit - define ação ao enviar um formulário

*/ 

const element = document.querySelector('button')

const myFunction = () => {
    alert("Aoba")
}

/* 

Tem como chamar a função dando o onClick usando apenas isso:

element.onclick = () => {
    alert("Aoba"
}

Nesse caso não precisa colocar o onclick no button.

*/