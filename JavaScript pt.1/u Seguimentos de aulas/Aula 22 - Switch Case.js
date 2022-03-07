const temperatura = 40

switch (temperatura) {
    case 30:
        console.log("A temperatura está muito abaixo do normal")
        break;

    case 34:
        console.log("A temperatura está abaixo do normal")
        break;

    case 36:
        console.log("A temperatura está normal")
        break;

    case 38:
        console.log("A temperatura está acima do normal")
        break;

    case 40:
        console.log("Procure um médico")
        break;

    default:
        console.log("A temperatura não foi encontrada")
        break;
}

