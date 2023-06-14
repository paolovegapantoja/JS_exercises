/*Fibonacci: es una sucesión infinita de números naturales, donde el siguiente es calculado sumando los dos anteriores.

Ejemplo:
    0, 1, 1, 2, 3, 5, 8, 13, 21.
*/

var i = true;
var num1 = 0;
var num2 = 1;

console.log(num1);
console.log(num2);
while (i == true){
	num3 = num1 + num2;
	console.log(num3);
	num1=num2;
	num2=num3;
}
