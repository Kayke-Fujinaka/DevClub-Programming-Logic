const button = document.getElementById("currency-button")
const select = document.getElementById("currency-select")

const dollar = 5 
const euro = 6

buttonClick = () => {
    const input = document.getElementById("input-value").value
    const realValue = document.getElementById("real-value-text")
    const dollarValue = document.getElementById("us-value-text")

    realValue.innerHTML = new Intl.NumberFormat("pt-BR",
        {style:"currency", currency: "BRL"}
    ).format(input)

    if(select.value === "Dólar americano") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-US",
        {style:"currency", currency: "USD"}
        ).format(input / dollar)
    }
    
    if(select.value === "Euro") {
        dollarValue.innerHTML = new Intl.NumberFormat("de-DE",
        {style:"currency", currency: "EUR"}
        ).format(input / euro)
    }

}

selectChange = () => {
    const currencyImg = document.getElementById("currency-image")
    const currencyName = document.getElementById("currency-name")

    if(select.value === "Dólar americano") {
        currencyImg.src = "./assets/img/eua.svg"
        currencyName.innerHTML = "Dólar americano"
    }

    if(select.value === "Euro") {
        currencyImg.src = "./assets/img/euro.svg"
        currencyName.innerHTML = "Euro"
    }

    buttonClick()

}

button.addEventListener("click", buttonClick)
select.addEventListener("change", selectChange)