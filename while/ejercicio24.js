/*Imprimir los números pares del 1 al 50:*/

var inicio = 0;
var limite = 50;
var i = 0;

while (inicio <= limite){
    
	if(i % 2 == 0){
    	console.log(i)
    	i++;
    	inicio = i;
	}else{
    	i++;
    	inicio = i;
	}
}
