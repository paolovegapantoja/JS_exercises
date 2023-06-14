/*Realizar un pequeño contador que vaya de 5 a 1000 que cuente de 5 en 5 y a su vez que lo concatene con un texto que diga: "El contador vale: ".

Ejemplo:
'El contador vale 5'
'El contador vale 10'
'El contador vale 15'...
'El contador vale 1000'*/

var suma = 5;

while (suma <= 1000) {
  console.log("El contador vale", suma);
  suma = suma + 5;
}
