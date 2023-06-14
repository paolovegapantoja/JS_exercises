/*Los tramos impositivos para la declaración de la renta en un determinado país son los siguientes:
Renta                              Tipo impositivo
Menos de 10000€                      5%
Entre 10000€ y 20000€                15%
Entre 20000€ y 35000€                20%
Entre 35000€ y 60000€                30%
Más de 60000€                        45%
Escribir un programa que con una variable tenga del usuario su renta anual y muestre por pantalla lo que tiene que pagar.*/


renta = 100000

if(renta <= 100000){
  console.log("Impuesto renta del 5% por ingresos de: ", renta," Total a pagar: ", (renta*0.05))
}if(renta >100000 & renta <= 200000){
    console.log("Impuesto renta del 15% por ingresos de: ", renta," Total a pagar: ", (renta*0.15))
}if(renta >200000 & renta <= 350000){
    console.log("Impuesto renta del 20% por ingresos de: ", renta," Total a pagar: ", (renta*0.20))
}if(renta >350000 & renta <= 600000){
    console.log("Impuesto renta del 30% por ingresos de: ", renta," Total a pagar: ", (renta*0.30))
}if(renta >600000){
    console.log("Impuesto renta del 45% por ingresos de: ", renta," Total a pagar: ", (renta*0.45))
}