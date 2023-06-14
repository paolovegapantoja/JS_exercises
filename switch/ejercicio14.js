/*En este caso, se utiliza un switch case para asignar una categoría de edad a una persona en función de su edad. Dependiendo del rango de edad, se muestra un mensaje correspondiente a la categoría de edad.
    De 0 a 2 años: "Bebé"
    De 3 a 12 años: "Niño/a"
    de 13 a 19 años: "Adolescente"
    De 20 a 59 años: "Adulto/a"
    Mayor de 60 años: "Adulto Mayor"*/

    var edad = 25
    switch (true){
        case edad >= 0  && edad <= 2:
            console.log("Bebe")
            break
        case edad >= 3 && edad <= 12:
            console.log("Niño/a")
            break
        case edad >= 13 && edad <= 19:
            console.log("Adolescente")
            break
        case edad >= 20 && edad <= 59:
            console.log("Adulto/a")
            break
        case edad >= 60:
            console.log("Adulto Mayor")
            break
        default:
            console.log("Edad No Valida")
    }    