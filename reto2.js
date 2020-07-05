const numerOne = parseInt(prompt('Ingrese un número'))
const numberTwo = parseInt(prompt('Ingrese otro número'))

if (numberTwo<numerOne) {
    console.log(`El número ${numberTwo} se encuentra dentro del rango, gracias`)
} else {
    console.log(`El número ${numberTwo} excede el límite permitido`)
}