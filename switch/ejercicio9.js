/*Este ejemplo utiliza un switch case para determinar el día de la semana en función de un número dado. Dependiendo del valor del número, se muestra un mensaje correspondiente al día de la semana.*/

var dia = 9

switch (dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break
    default:
        console.log("Numero no corresponde a un dia")
        break;
}