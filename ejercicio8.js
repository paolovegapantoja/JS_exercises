/*Escribe un programa que con una variable número del 1 al 7 y muestre por consola el día de la semana correspondiente.*/

var num = 7

if (num >= 1 && num <=7){
	if (num == 1){
    	console.log("Lunes")
	}if (num == 2){
    	console.log("Martes")
	}if (num == 3){
    	console.log("Miercoles")
	}if (num == 4){
    	console.log("Jueves")
	}if (num == 5){
    	console.log("Viernes")
	}if (num == 6){
    	console.log("Sabado")
	}if (num == 7){
    	console.log("Domingo")
	}
}else{
	console.log("Numero de dia no valido")
}
