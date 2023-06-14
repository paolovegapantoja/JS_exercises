/*En este caso, el switch case se utiliza para identificar si un día específico es un día laborable o un día de fin de semana. Dependiendo del día proporcionado, se muestra un mensaje correspondiente al tipo de día.*/


var dia = "Domingo"

switch(true){
    case dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes":
        console.log("El", dia, "es un Dia Laboral")
        break
    case dia == "Sabado" || dia == "Domingo":
        console.log("El", dia, "es un Dia No Laboral")
        break
    default:
        console.log("Ingrese un dia valido")
}