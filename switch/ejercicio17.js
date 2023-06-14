/*Crea un programa que solicite al usuario que ingrese un carácter y luego muestre el código ASCII correspondiente a ese carácter. Utiliza un switch case para manejar diferentes caracteres y mostrar el código correspondiente.  https://elcodigoascii.com.ar/  */

var vocal = "u"

switch (vocal){
    case vocal = "a":
        console.log("El codigo ascii de la vocal", vocal, "es: 97");
        break;
    case vocal = "e":
        console.log("El codigo ascii de la vocal", vocal, "es: 101");
        break;
    case vocal = "i":
        console.log("El codigo ascii de la vocal", vocal, "es: 105");
        break;
    case vocal = "o":
        console.log("El codigo ascii de la vocal", vocal, "es: 111");
        break;
    case vocal = "u":
        console.log("El codigo ascii de la vocal", vocal, "es: 117");
        break;
    default:
        console.log("El dato ingresado no corresponde a una vocal.")
}