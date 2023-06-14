/*Realiza un programa que te pida un número positivo y si introduces un número negativo te vuelva a pedir el número.*/

var bandera = 0;
var numero = -1;
while (bandera == 0) {
  if (numero > 0){
	console.log("Introduzca un numero: ");    
  }else if (numero < 0){
  	bandera = 1;
  }else{
  	console.log("Introduzca un numero: ");
  }
}
