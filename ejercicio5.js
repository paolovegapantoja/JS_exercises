/*Investigar y realizar un programa que dependiendo del dato IMC que se ingrese, se determina que peso tiene la persona.*/

var imc = 21.6
var estatura = 1.75
var peso = 0

if (imc <= 0 || estatura <= 0){
	console.log("Error en datos de entrada")
}else{
	peso = ((imc)*(Math.pow(estatura, 2)))
	console.log("Su peso aproximado es: ", peso , "Kgs")
}
