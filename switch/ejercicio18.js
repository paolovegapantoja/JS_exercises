/*Escribe un programa que permita al usuario convertir una temperatura de Celsius a Fahrenheit o de Fahrenheit a Celsius. El programa debe solicitar al usuario que ingrese la temperatura y luego pedirle que elija la conversión deseada. Utiliza un switch case para realizar la conversión seleccionada y mostrar el resultado al usuario.*/

var temperatura = 103
var conversion = 0
var tipo = "f_to_c"

switch (true){
    case tipo == "c_to_f":
        conversion = (temperatura * 1.8) + 32;
        console.log(temperatura," Celsius son: ", Math.round(conversion, -1),"Fahrenheit");
        break;
    case tipo == "f_to_c":
        conversion = (temperatura - 32) * 0.55;
        console.log(temperatura," Fahrenheit son: ", Math.round(conversion, -1),"Celsius");
        break;
    default:
        console.log("Datos incorrectos.");
}