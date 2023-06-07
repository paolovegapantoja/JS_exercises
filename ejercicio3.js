/*Para tributar un determinado impuesto se debe ser mayor de 19 años y tener unos ingresos iguales o superiores a 2.500.000 mensuales. Escribir un programa que tenga 2 variables su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no*/

var edad = 20
var ingresos = 2500000

if (edad > 19)
  {
    if(ingresos >= 2500000){
      console.log("Usted debe tributar")
    }else
      {
        console.log("Usted no debe tributar. Causa: Ingresos")
      }
  }else
  {
    console.log("Usted no debe tributar. Causa: Edad")
  }
