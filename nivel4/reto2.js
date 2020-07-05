const numberOne=parseFloat(prompt('Ingrese un numero con decimales'))
const numberTwo=parseFloat(prompt('Ingrese otro numero con decimales'))
const n=parseInt(prompt('Cuantos decimales quieres: 1,2,3 o 4'))

const multiplicacion=(one, two)=>{
    return one*two
}
const result=multiplicacion(numberOne,numberTwo)
const truncate=result.toFixed(n)

console.log(truncate)