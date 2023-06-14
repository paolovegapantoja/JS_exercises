/*calcular el factorial de un número:*/

var numero = 10;
var cantidad = numero;
var factorial = 1;
var i = 0;

while (i < cantidad){
	factorial = factorial * numero;
	numero = numero - 1;
	i++;
}
console.log(factorial)
