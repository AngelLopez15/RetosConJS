const numberOne = parseInt(prompt('digite un numero'))
const numberTwo = parseInt(prompt('digite otro numero'))

if (numberOne>numberTwo) {
    console.log(`El mayor es ${numberOne}`)
    const variance = numberOne-numberTwo
    console.log(`La diferencia entre números es de ${variance}`)
} else if(numberOne<numberTwo){
    console.log(`El mayor es ${numberTwo}`)
    const variance = numberTwo-numberOne
    console.log(`La diferencia entre números es de ${variance}`)
}else{
    console.log('Los números son iguales')
}