const radio=parseFloat(prompt('Vamos a calcular el volumen de un cilendro. Ingrese el valor del radio'))
const height=parseFloat(prompt('Ingrese el valor de la altura del cilindro'))

const area=(number)=>{
    const pi=Math.PI
    const radioElevate=Math.pow(number,2)
    return pi*radioElevate
}

const volumen=(area,altura)=>{
    return area*altura
}

const result=volumen(area(radio),height)

console.log(`El volumen del cilindro es ${result}`)