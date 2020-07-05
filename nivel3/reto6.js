const name=prompt('Ingresa tu nombre').trim()
const size=name.length


const capitalize = (str) => {
    const upper = str.charAt(0).toUpperCase()
    const subS=str.substring(1)
    return `${upper}${subS}`
}

const newString = (array) => {
    let newArray=array.map(el=>{
        return capitalize(el)
    })
    return newName=newArray.join(' ')
}

if (size<=5) {
    const lastName=prompt('Ingresa tu apellido').trim()
    const name2=newString(name.split(' '))
    const lastName2=newString(lastName.split(' '))
    console.log(`Hola, tu nombre es ${name2} ${lastName2}`)
} else {
    const name2=newString(name.split(' '))
    console.log(`Hola, tu nombre es ${name2}`)
}
