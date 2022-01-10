
function calcula(rec, des) {

    let receitas = 0;
    let despesas = 0;
    let total = 0;

    for (chaverec in rec) {
        receitas += rec[chaverec];
    }

    for (chavedes in des) {
        despesas += des[chavedes];
    }
    console.log(receitas);
    console.log(despesas);

    total = receitas - despesas;
    return total;
}


const objrenda = {
    receitas: [20, 30, 40, 50],
    despesas: [20, 20, 30, 70]
}

let verifica = 0;


verifica = calcula(objrenda.receitas, objrenda.despesas);

if (verifica > 0) {
    console.log("Saldo Positivo");
} else if (verifica < 0) {
    console.log("Saldo Negativo");
} else if (verifica == 0) {
    console.log("Saldo igual a zero NULO");
}