function calcularHipoteca(salarioPromedio) {

    if (salarioPromedio > 10000) {
        return salarioPromedio * 0
    }
    
    if (salarioPromedio > 1000) {
        return salarioPromedio * 150
    }  

    if (salarioPromedio < 1000)
        return salarioPromedio * 200
}

let nombre = prompt("Ingrese su nombre completo")
let edad = prompt("Ingrese su edad")
let ciudad = prompt("Ingrese su ciudad actual")

let ultimoSalario
do {
    ultimoSalario = parseInt(prompt("Ingrese su salario bruto mensual"))

    if (isNaN(ultimoSalario)) {
        alert("Ingrese un valor numérico")
    }

    if (ultimoSalario <= 0) {
        alert("Ingrese un número mayor a 0")
    }
} while (ultimoSalario <= 0 || isNaN(ultimoSalario))



let anteUltimoSalario
do {
    anteUltimoSalario = parseInt(prompt("Ingrese el salario bruto mensual de su trabajo anterior"))

    if (isNaN(anteUltimoSalario)) {
        alert("Ingrese un valor numérico")
    }

    if (anteUltimoSalario <= 0) {
        alert("Ingrese un número mayor a 0")
    }
} while (anteUltimoSalario <= 0 || isNaN(anteUltimoSalario))



const listaDeSalarios = []

listaDeSalarios.push(ultimoSalario, anteUltimoSalario)
console.log(listaDeSalarios)


function calcularPromedio(valor1, valor2){
    return(valor1 + valor2)/2
} 


let salarioPromedio = calcularPromedio(ultimoSalario, anteUltimoSalario)

let resultadoHipoteca = calcularHipoteca(salarioPromedio)

alert("Nuestro banco puede ofrecerte " + resultadoHipoteca + " patacones" + " Sr/a " + nombre)


let persona = {
    nombre: nombre,
    edad: edad, 
    ciudad: ciudad, 
    salarioActual: ultimoSalario, 
    salarioAnterior: anteUltimoSalario,
    salarioPromedio: salarioPromedio, 
    prestamoPosible: resultadoHipoteca
}

console.table(persona)

