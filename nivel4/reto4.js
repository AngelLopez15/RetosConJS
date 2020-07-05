const base=parseFloat(prompt(`Vamos a calcular el área de un circulo
ingrese el valor del radio.`))

const area=(number)=>{
    const pi=Math.PI
    const radioElevate=Math.pow(number,2)
    return pi*radioElevate
}

const result=area(base)

console.log(`El área es ${result}`)