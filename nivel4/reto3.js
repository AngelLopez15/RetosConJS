const number=parseInt(prompt('Ingrese un numero mayor a 20'))

const sqrTrunc=(number)=>{
    const numberSqrt = Math.sqrt(number)
    return numberSqrt.toFixed(2)
}

console.log(sqrTrunc(number))