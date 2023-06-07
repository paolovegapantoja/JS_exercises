/*Escribir un programa que con dos variables en el que se almacenen dos números y muestre por pantalla su división. Si el divisor o el dividendo es cero el programa debe mostrar un error.*/

var num1 = 20;
var num2 = 5;

if(num1 == 0 || num2 == 0){
  console.log("Error")
}
else{
  division = num1/num2
  console.log(division)
}
