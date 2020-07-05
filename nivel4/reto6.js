const numberOne=parseInt(prompt('Ingrese un número'))
const numberTwo=parseInt(prompt('Ingrese otro número'))

const division=(numberOne,numberTwo)=>{
    const div=Math.trunc(numberOne/numberTwo) 
    const modulo=numberOne%numberTwo
    return `${numberOne} dividido entre ${numberTwo} es ${div} y sobra ${modulo}`
}

console.log(division(numberOne,numberTwo))