

function trasformaCelcius(valor) {
    valorConvertido = valor.replace(/\D+/g, "");

    let C = 0;

    C = (valorConvertido - 32) * 5 / 9;

    return C;

}

function trasformaFahrenheit(valor) {
    valorConvertido = valor.replace(/\D+/g, "");

    let F = 0;

    F = valorConvertido * 9 / 5 + 32;

    return F;

}


let valor = "131C";
let total;

if (valor.includes("F")) {
    total = trasformaCelcius(valor);

} else if (valor.includes("C")) {
    total = trasformaFahrenheit(valor);

}

console.log(total);