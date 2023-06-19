function calcularHipoteca(valorSalario) {

    if (valorSalario > 10000) {
        return valorSalario * 0
    }

    if (valorSalario > 1000) {
        return valorSalario * 150
    }  
    return valorSalario * 200
}

let salario
do {
    salario = prompt("Ingrese su salario bruto mensual")

    if (isNaN(salario)) {
        alert("Ingrese un valor numérico")
    }

    if (salario <= 0) {
        alert("Ingrese un número mayor a 0")
    }
} while (salario <= 0 || isNaN(salario))

let resultadoHipoteca = calcularHipoteca(salario)

alert("Nuestro banco puede ofrecerte " + resultadoHipoteca + " patacones")