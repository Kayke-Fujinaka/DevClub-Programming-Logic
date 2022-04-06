const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
    console.log("Dei um foco")
})

//----------------------------

const selectChange = () => {
    console.log("Eu mudei")
}

select.addEventListener('change', selectChange)

//----------------------------

button.addEventListener("click", () => {
    input.value = "opa"
})
