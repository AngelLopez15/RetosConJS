const frase=prompt('Ingrese una palabra').trim().toLowerCase()


const primerLetra = (str) =>{
    const letra= str.charAt(0).toLowerCase()
    if (letra==='a' || letra==='e' || letra==='i' || letra==='o' || letra==='u' ) {
        return `${str}way`
    } else {
        const reacomodo=str.substring(1)
        return `${reacomodo}${letra}ay`
    }
}

const traductor = (arreglo) =>{
    let nuevoArreglo = arreglo.map(el=>{
        return primerLetra(el)
    })
    return nuevoArreglo.join(' ')
}

const nuevaFrase=traductor(frase.split(' '))

console.log(primerLetra(nuevaFrase))