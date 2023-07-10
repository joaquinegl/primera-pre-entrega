//Función para hacer los cálculos relativos al salario

function calcular(a, b, operacion) {
    return operacion(a,b);
}

function sumaDeSalarios(a, b) {
    return a + b; 
}

function promedioDeSalarios(a, b){
    return (a+b)/2;
}


// Función para hacer los cálculos relativos al préstamo

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



// Variables con los datos de la persona y sus salarios

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



// Array con el listado de salarios

let listaDeSalarios = []

listaDeSalarios.push(ultimoSalario, anteUltimoSalario)



// Utilización de las funciones para el cálculo de los salarios (promedio y suma)

let salarioPromedio = calcular(ultimoSalario, anteUltimoSalario, promedioDeSalarios) 

let sumatoriaDeSalarios = calcular(ultimoSalario, anteUltimoSalario, sumaDeSalarios)



// Utilización de la función para calcular el préstamo

let resultadoHipoteca = calcularHipoteca(salarioPromedio)

alert("Nuestro banco puede ofrecerte " + resultadoHipoteca + " patacones" + " Sr/a " + nombre)



// Objeto con todos los datos de la persona

let persona = {
    nombre: nombre,
    edad: edad, 
    ciudad: ciudad, 
    salarioActual: ultimoSalario, 
    salarioAnterior: anteUltimoSalario,
    salarioPromedio: salarioPromedio, 
    sumatoriaDeSalarios: sumatoriaDeSalarios,
    prestamoPosible: resultadoHipoteca,
    salariosListados: listaDeSalarios,
}

console.table(persona)
