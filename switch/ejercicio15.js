/*Este ejemplo utiliza un switch case para convertir una cantidad dada en una unidad de longitud específica a otra unidad. Dependiendo de la unidad proporcionada, se realiza la conversión y se muestra el resultado en la unidad deseada. Esta conversión será de cm a m y km*/

var unidades = 50
var unidad_ori = "km"
var unidad_dest = "m"
var conversion = 0

switch (true){
    case unidad_ori == "cm" && unidad_dest == "m":
        conversion = unidades/100;
        console.log(unidades, "centimetros son", conversion ,"metros");
        break;
    case unidad_ori == "cm" && unidad_dest == "km":
        conversion = unidades/100000;
        console.log(unidades, "centimetros son", conversion ,"kilometros");
        break;
    case unidad_ori == "m" && unidad_dest == "cm":
        conversion = unidades*100
        console.log(unidades, "metros son", conversion ,"centimetros")
        break
    case unidad_ori == "m" && unidad_dest == "km":
        conversion = unidades/1000
        console.log(unidades, "metros son", conversion ,"kilometros")
        break
    case unidad_ori == "km" && unidad_dest == "cm":
        conversion = unidades*100000
        console.log(unidades, "kilometros son", conversion ,"centimetros")
        break
    case unidad_ori == "km" && unidad_dest == "m":
        conversion = unidades*1000
        console.log(unidades, "kilometros son", conversion ,"metros")
        break
    default:
        console.log("Datos Incorrectos")
}