const numberOne=parseInt(prompt('Ingrese un número para que sea  el límite superior'))
const numerTwo=parseInt(prompt('Ingrese un número para que sea el límite inferior'))
const numerThree= parseInt(prompt('Ingrese otro número'))

if (numerThree>numerTwo && numerThree<numberOne) {
    console.log(`El número ${numerThree} se encuentra entre ${numerTwo} y ${numberOne}`)
}else if(numerThree<numerTwo){
    console.log(`El número ${numerThree} es menor a ${numerTwo}`)
}else{
    console.log(`El número ${numerThree} es mayor a ${numberOne}`)
}