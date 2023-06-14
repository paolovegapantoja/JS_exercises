/*El objetivo de este ejemplo es determinar la cantidad de días en un mes específico. Utilizando un switch case, se identifica el mes proporcionado y se muestra la cantidad de días correspondiente.*/


var mes = "Diciembre"

switch (mes){
    case "Enero":
        console.log("Enero tiene 31 dias");
        break;
    case "Febrero":
        console.log("Febrero tiene 29 dias");
        break;
    case "Marzo":
        console.log("Marzo tiene 31 dias");
        break;
    case "Abril":
        console.log("Abril tiene 30 dias");
        break;
    case "Mayo":
        console.log("Mayo tiene 31 dias");
        break;
    case "Junio":
        console.log("Junio tiene 30 dias");
        break;
    case "Julio":
        console.log("Julio tiene 31 dias");
        break;
    case "Agosto":
        console.log("Agosto tiene 31 dias");
        break;
    case "Septiembre":
        console.log("Septiembre tiene 30 dias");
        break;
    case "Octubre":
        console.log("Octubre tiene 31 dias");
        break;
    case "Noviembre":
        console.log("Noviembre tiene 30 dias");
        break;
    case "Diciembre":
        console.log("Diciembre tiene 31 dias");
        break;
    default:
        console.log("No existe un mes con ese nombre")
        break;
}