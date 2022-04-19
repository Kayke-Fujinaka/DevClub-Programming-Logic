const button = document.getElementById("currency-button")
const select = document.getElementById("currency-select")

const dollar = 5
const euro = 6

buttonClick = () => {
    const input = document.getElementById("input-value").value
    const realValue = document.getElementById("real-value-text")
    const dollarValue = document.getElementById("us-value-text")

    realValue.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL" }
    ).format(input)

    if (select.value === "Dólar americano") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD" }
        ).format(input / dollar)
    }

    if (select.value === "Euro") {
        dollarValue.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR" }
        ).format(input / euro)
    }

}

selectChange = () => {
    const image = document.getElementById("currency-image")
    const name = document.getElementById("currency-name")

    if (select.value === "Dólar americano") {
        image.src = "./assets/img/eua.svg"
        name.innerHTML = "Dólar americano"
    }

    if (select.value === "Euro") {
        image.src = "./assets/img/euro.svg"
        name.innerHTML = "Euro"
    }

    buttonClick()
}


select.addEventListener("change", selectChange)
button.addEventListener("click", buttonClick)