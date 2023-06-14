/*En este caso, el switch case se utiliza para identificar el mes del año en función de un número dado. Se muestra un mensaje según el número proporcionado correspondiente al mes.*/

var mes = "Enero"

switch (mes){
    case "Enero":
        console.log(1);
        break;
    case "Febrero":
        console.log(2);
        break;
    case "Marzo":
        console.log(3);
        break;
    case "Abril":
        console.log(4);
        break;
    case "Mayo":
        console.log(5);
        break;
    case "Junio":
        console.log(6);
        break;
    case "Julio":
        console.log(7);
        break;
    case "Agosto":
        console.log(8);
        break;
    case "Septiembre":
        console.log(9);
        break;
    case "Octubre":
        console.log(10);
        break;
    case "Noviembre":
        console.log(11);
        break;
    case "Diciembre":
        console.log(12);
        break;
    default:
        console.log("No existe un mes con ese nombre")
        break;
}